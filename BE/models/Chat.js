const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  pengirim: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User", // Referensi ke model User
  },
  penerima: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User", // Referensi ke model User
  },
  isi_chat: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", chatSchema);