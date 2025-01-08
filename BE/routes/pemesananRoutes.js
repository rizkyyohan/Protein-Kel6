// routes/pemesananRoutes.js
const express = require("express");
const router = express.Router();
const pemesananController = require("../controllers/pemesananController");
const authMiddleware = require("../middleware/authMiddleware");

// Middleware untuk otentikasi
router.use(authMiddleware.verifyToken);

// Rute untuk membuat pemesanan baru
router.post("/", pemesananController.createPemesanan); 

// routes/pemesananRoutes.js

// Rute untuk mendapatkan semua pemesanan
router.get("/", pemesananController.getAllPemesanan);

// Rute untuk mendapatkan pemesanan berdasarkan ID
router.get("/:id", pemesananController.getPemesananById);


module.exports = router;