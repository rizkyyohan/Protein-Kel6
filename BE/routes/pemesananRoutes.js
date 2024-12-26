// routes/pemesananRoutes.js
const express = require("express");
const router = express.Router();
const pemesananController = require("../controllers/pemesananController");
const authMiddleware = require("../middleware/authMiddleware");

// Middleware untuk otentikasi
router.use(authMiddleware.verifyToken);

// Rute untuk membuat pemesanan baru
router.post("/", pemesananController.createPemesanan); 

// ... tambahkan rute lain untuk mendapatkan, mengupdate, 
//     atau menghapus pemesanan jika diperlukan

module.exports = router;