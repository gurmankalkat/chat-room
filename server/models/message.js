const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender: String,
    text: String
}, {timestamps: true});

const MessageModel = mongoose.model('Message', messageSchema);
``
module.exports = MessageModel;