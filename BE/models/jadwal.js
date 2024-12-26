const mongoose = require("mongoose");

// Skema untuk Jadwal
const jadwalSchema = new mongoose.Schema(
  {
    penawaran: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Penawaran", // Referensi ke model Penawaran
      required: [true, "Penawaran ID is required"],
    },
    pemandu: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Referensi ke model User (karena pemandu adalah user)
      required: [true, "Guide ID is required"],
    },
    tanggal: {
      type: Date,
      required: [true, "Tanggal is required"],
    },
  },
  { timestamps: true } // Menambahkan createdAt dan updatedAt
);

// Ekspor model
module.exports = mongoose.model("Jadwal", jadwalSchema);