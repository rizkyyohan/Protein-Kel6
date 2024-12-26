const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tipe: {
    type: String,
    enum: ["login", "logout", "lainnya"], // Tipe log
    required: true,
  },
  keterangan: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Log", logSchema);