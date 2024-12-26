const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://daffafariz:Password123@<cluster>/TravelAble?retryWrites=true&w=majority", // Gunakan "TravelAble"
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;