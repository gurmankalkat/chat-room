const User = require("../models/user");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  console.log("Test route hit");
  res.json("Test is working");
};

const registerUser = async (req, res) => {
  try {
    console.log("Register route hit");
    const { username, password } = req.body;
    console.log(`Received username: ${username}, password: ${password}`);

    if (!username) {
      console.log("Username is required");
      return res.status(400).json({ error: "Username is required" });
    }

    if (!password) {
      console.log("Password is required");
      return res.status(400).json({ error: "Password is required" });
    }

    const exist = await User.findOne({ username });
    if (exist) {
      console.log("Username already exists");
      return res.status(400).json({ error: "Username already exists" });
    }

    const user = await User.create({ username, password });
    console.log("User created successfully:", user);
    return res.status(201).json(user);
  } catch (error) {
    console.log("Server error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

const comparePassword = (password, userPassword) => {
  return password === userPassword;
};

const loginUser = async (req, res) => {
  try {
    console.log("Login route hit");
    const { username, password } = req.body;
    console.log(`Received username: ${username}, password: ${password}`);
    const user = await User.findOne({ username });

    if (!user) {
      console.log("User not found");
      return res.status(400).json({ error: "User not found" });
    }

    const match = comparePassword(password, user.password);
    if (!match) {
      console.log("Invalid password");
      return res.status(400).json({ error: "Invalid password" });
    }

    const payload = { id: user._id, username: user.username };

    jwt.sign(payload, process.env.JWT_SECRET, {}, (err, token) => {
      if (err) {
        return res.status(500).json({ error: "JWT signing error" });
      }
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      }).status(200).json({ message: 'Login successful', user });
    });
  } catch (error) {
    console.log("Server error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
};
