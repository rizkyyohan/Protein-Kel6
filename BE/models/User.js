const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 100,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["customer", "pemandu"],
      required: true,
    },
    nomor_tel: {
      type: String,
      maxlength: 15,
    },
    alamat: {
      type: String,
    },
    profile_picture: {
      type: String,
    },
    pengalaman: { // Field khusus untuk pemandu
      type: Number,
      min: 0,
    },
    kebiasaan: { // Field khusus untuk pemandu
      type: String,
    },
    gender: { // Field khusus untuk pemandu
      type: String,
      enum: ["Male", "Female"],
    },
    harga: { // Field khusus untuk pemandu
      type: Number,
      min: 0,
    },
    status_aktif: { // Field khusus untuk pemandu
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);