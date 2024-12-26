const mongoose = require("mongoose");

const penawaranSchema = new mongoose.Schema({
  pemesanan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pemesanan",
    required: true,
  },
  pemandu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Referensi ke model User (karena pemandu adalah user)
    required: true,
  },
  status_penawaran: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
  tanggal: { // Tanggal penawaran dibuat
    type: Date,
    default: Date.now,
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

const Penawaran = mongoose.model("Penawaran", penawaranSchema);

module.exports = Penawaran;