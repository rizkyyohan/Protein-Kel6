const mongoose = require("mongoose");

const guideSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer", // Referensi ke model customer
    required: true,
  },
  pemandu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "pemandu", // Referensi ke model pemandu
    required: true,
  },
  pengalaman: {
    type: Number,
    required: true,
    min: 0,
  },
  kebiasaan: String,
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  alamat: String,
  harga: {
    type: Number,
    required: true,
    min: 0,
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
