// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// // Load .env file
// dotenv.config();

// // Inisialisasi aplikasi Express
// const app = express();

// // Koneksi ke MongoDB
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Failed to connect to MongoDB", err));

// // Rute dasar untuk menangani GET ke '/'
// app.get("/", (req, res) => {
//   res.send("Hello World! Server is running.");
// });

// // Middleware dan routing lainnya
// app.use(express.json());

// // Menambahkan rute-rute API yang ada
// const chatRoutes = require("./routes/chatRoutes");
// app.use("/api/chats", chatRoutes);

// const authRoutes = require("./routes/authRoutes");
// app.use("/api/auth", authRoutes);

// const userRoutes = require("./routes/userRoutes");
// app.use("/api/users", userRoutes);

// const guideRoutes = require("./routes/guideRoutes");
// app.use("/api", guideRoutes);

// const pemesananRoutes = require("./routes/pemesananRoutes");
// app.use("/api/pemesanan", pemesananRoutes);

// const destinationRoutes = require("./routes/destinationRoutes");
// app.use("/api/destination", destinationRoutes);

// // Menambahkan rute untuk fitur Jadwal
// const jadwalRoutes = require("./routes/jadwalRoutes");
// app.use("/api/jadwal", jadwalRoutes);

// // Menambahkan rute untuk fitur Rating
// const ratingRoutes = require("./routes/ratingRoutes");
// app.use("/api/rating", ratingRoutes);

// const penawaranRoutes = require("./routes/penawaranRoutes");
// app.use("/api/penawaran", penawaranRoutes);



// // Jalankan server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // Tambahkan ini

// Load .env file
dotenv.config();

// Inisialisasi aplikasi Express
const app = express();

// Gunakan middleware CORS
app.use(cors()); // Izinkan semua origin
// Atau jika hanya ingin mengizinkan frontend tertentu
// app.use(cors({ origin: "http://localhost:3000" }));

// Koneksi ke MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Rute dasar untuk menangani GET ke '/'
app.get("/", (req, res) => {
  res.send("Hello World! Server is running.");
});

// Middleware dan routing lainnya
app.use(express.json());

// Menambahkan rute-rute API yang ada
const chatRoutes = require("./routes/chatRoutes");
app.use("/api/chats", chatRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const guideRoutes = require("./routes/guideRoutes");
app.use("/api", guideRoutes);

const pemesananRoutes = require("./routes/pemesananRoutes");
app.use("/api/pemesanan", pemesananRoutes);

const destinationRoutes = require("./routes/destinationRoutes");
app.use("/api/destination", destinationRoutes);

const jadwalRoutes = require("./routes/jadwalRoutes");
app.use("/api/jadwal", jadwalRoutes);

const ratingRoutes = require("./routes/ratingRoutes");
app.use("/api/rating", ratingRoutes);

const penawaranRoutes = require("./routes/penawaranRoutes");
app.use("/api/penawaran", penawaranRoutes);

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});