// models/Destination.js
const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  nama_destinasi: {
    type: String,
    required: true,
  },
  lokasi: {
    type: String,
    required: true,
  },
  harga_tiket: {
    type: Number,
    required: true,
    min: 0, // Memastikan harga tiket tidak negatif
  },
  kategori: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    default: 0.0,
    min: 0,
    max: 5, // Memastikan rate berada di antara 0 dan 5
  },
  fasilitas: {
    type: String,
    required: true,
  },
  keterangan: {
    type: String,
    required: true,
  },
  gambar: {
    type: String, // Untuk menyimpan URL gambar
  },
  akses_kursi_roda: {
    type: Boolean,
    default: false,
  },
  toilet_disabilitas: {
    type: Boolean,
    default: false,
  },
  braille: {
    type: Boolean,
    default: false,
  },
  audio_guide: {
    type: Boolean,
    default: false,
  },
  deskripsi_aksesibilitas: {
    type: String,
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

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;