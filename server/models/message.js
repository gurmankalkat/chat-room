const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: String,
  // Add recipient
  // selectedPerson: String, 
  text: String,
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Message", messageSchema);
