// models/Guide.js
const mongoose = require("mongoose");

const guideSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Referensi ke model User
    required: true,
  },
  pengalaman: {
    type: Number, // Ubah tipe data menjadi Number
    required: true,
    min: 0, // Memastikan pengalaman tidak negatif
  },
  kebiasaan: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"], // Membatasi nilai gender
  },
  alamat: {
    type: String,
  },
  harga: {
    type: Number,
    required: true,
    min: 0, // Memastikan harga tidak negatif
  },
  status_aktif: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Guide = mongoose.model("Guide", guideSchema);

module.exports = Guide;

