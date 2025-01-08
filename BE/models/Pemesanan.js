const mongoose = require("mongoose");

const pemesananSchema = new mongoose.Schema({
  pengguna: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  pemandu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Guide",
    required: true,
  },
  destinasi: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination",
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  tanggal_pemesanan: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
    default: "Pending",
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

pemesananSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const Pemesanan = mongoose.model("Pemesanan", pemesananSchema);
module.exports = Pemesanan;
