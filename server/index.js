const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const ws = require("ws");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

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
app.use(cookieParser());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

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

  connection.on("message", (message) => {
    const messageData = JSON.parse(message.toString());
    const { recipient, text } = messageData;
    if (recipient && text) {
      [...wss.clients].filter(c => c.username === recipient).forEach(c => {
        c.send(JSON.stringify({ sender: connection.username, text }));
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
