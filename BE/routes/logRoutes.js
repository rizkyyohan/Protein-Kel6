const express = require("express");
const router = express.Router();
const logController = require("../controllers/logController");
const authMiddleware = require("../middleware/authMiddleware");

// Middleware untuk otentikasi (opsional, jika Anda ingin membatasi akses)
router.use(authMiddleware.verifyToken);

// Route untuk membuat log baru
router.post("/", logController.createLog, (req, res) => {
  res.status(201).json({ message: "Log berhasil dibuat" });
});

// Route untuk mendapatkan semua log (hanya untuk admin)
router.get("/", authMiddleware.verifyRole("admin"), logController.getAllLogs);

module.exports = router;