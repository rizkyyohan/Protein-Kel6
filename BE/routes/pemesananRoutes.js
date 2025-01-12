const express = require("express");
const router = express.Router();
const pemesananController = require("../controllers/pemesananController");
const authMiddleware = require("../middleware/authMiddleware");

// Middleware untuk otentikasi
router.use(authMiddleware.verifyToken);

// Rute untuk membuat pemesanan baru
router.post("/", pemesananController.createPemesanan);

// Rute untuk mendapatkan semua pemesanan
router.get("/", pemesananController.getAllPemesanan);

// Rute untuk mendapatkan pemesanan berdasarkan ID
router.get("/:id", pemesananController.getPemesananById);

// Rute untuk memperbarui pemesanan
router.put("/:id", pemesananController.updatePemesananById);

// Rute untuk menghapus pemesanan
router.delete("/:id", pemesananController.deletePemesananById);

module.exports = router;
