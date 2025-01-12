const mongoose = require("mongoose");

const pemesananSchema = new mongoose.Schema({
  pengguna: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Relasi dengan koleksi pengguna
    required: true,
  },
  pemandu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Guide", // Relasi dengan koleksi pemandu
    required: true,
  },
  destinasi: {
    type: String, // Ubah ke string karena data langsung dari frontend
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  jumlah_orang: {
    type: Number,
    required: true,
    min: 1, // Minimal 1 orang
  },
  tambahan_perlindungan: {
    type: Boolean,
    default: false, // Default tanpa perlindungan tambahan
  },
  total_harga: {
    type: Number,
    required: true, // Total harga harus diisi
  },
  tanggal_pemesanan: {
    type: String, // Gunakan string untuk menyimpan rentang tanggal (e.g., "2025-01-12 - 2025-01-14")
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Completed", "Cancelled"], // Status yang diperbolehkan
    default: "Pending", // Default status pemesanan
  },
  created_at: {
    type: Date,
    default: Date.now, // Tanggal dibuat
  },
  updated_at: {
    type: Date,
    default: Date.now, // Tanggal diperbarui
  },
});

// Middleware untuk memperbarui `updated_at` setiap kali data diubah
pemesananSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const Pemesanan = mongoose.model("Pemesanan", pemesananSchema);
module.exports = Pemesanan;
