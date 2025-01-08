const mongoose = require("mongoose");

const penawaranSchema = new mongoose.Schema({
  pemesanan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pemesanan",
    required: true,
  },
  pemandu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Pastikan pemandu adalah user
    required: true,
  },
  status_penawaran: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
  tanggal: {
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

penawaranSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const Penawaran = mongoose.model("Penawaran", penawaranSchema);
module.exports = Penawaran;
