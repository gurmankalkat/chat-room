const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const ws = require("ws");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const MessageModel = require("./models/message");

const app = express();

// Database connection
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Database connected");
}).catch((err) => {
  console.log(err);
});

// Middleware
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()) ;

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Add a route to fetch messages
app.get("/api/messages", async (req, res) => {
  try {
    const messages = await MessageModel.find().sort({ createdAt: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

const port = 8000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// WebSocket setup
const wss = new ws.Server({ server });

wss.on("connection", (connection, req) => {
  const cookies = req.headers.cookie;
  if (cookies) {
    const tokenCookieString = cookies.split(";").find(str => str.trim().startsWith("token="));
    if (tokenCookieString) {
      const token = tokenCookieString.split("=")[1];
      if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, userData) => {
          if (err) throw err;
          console.log(userData);
          const { userID, username } = userData;
          connection.userID = userID;
          connection.username = username;
          broadcastOnlineUsers();
        });
      }
    }
  }

  connection.on("message", async (message) => {
    const messageData = JSON.parse(message.toString());
    const { text } = messageData;
    const recipients = [...wss.clients].filter(c => c.username !== connection.username);

    if (text) {
      const messageDoc = await MessageModel.create({
        sender: connection.username, // Ensure the username is saved as the sender
        text
      });
      recipients.forEach(recipient => {
        recipient.send(JSON.stringify({
          sender: connection.username,
          text,
          id: messageDoc._id
        }));
      });
    }
  });

  connection.on("close", () => {
    broadcastOnlineUsers();
  });
});

// Broadcast the list of online users
function broadcastOnlineUsers() {
  const onlineUsers = [...wss.clients]
    .filter(client => client.username)
    .map(client => ({ userID: client.userID, username: client.username }));

  [...wss.clients].forEach(client => {
    client.send(JSON.stringify({ online: onlineUsers }));
  });
}

// Debugging middleware to log request cookies
app.use((req, res, next) => {
  console.log("Request Cookies:", req.cookies);
  next();
});
