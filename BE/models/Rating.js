const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema(
  {
    pengguna: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
    destinasi: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Destination", 
      required: true 
    },
    // profile_picture: { type: String, default: "" }, // profile_picture bisa diakses dari model User
    star_rate: { 
      type: Number, 
      required: true, 
      min: 0, 
      max: 5 
    },
    komen: { 
      type: String, 
      default: "" 
    }
  },
  { timestamps: true } // Untuk createdAt & updatedAt otomatis
);

module.exports = mongoose.model("Rating", ratingSchema);