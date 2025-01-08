const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  senderId: {
    type: String, // ID User atau Guide
    required: true,
  },
  receiverId: {
    type: String, // ID lawan chat (Guide atau User)
    required: true,
  },
  isi_chat: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Chat', ChatSchema);
