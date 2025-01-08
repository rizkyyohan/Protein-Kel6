// routes/logRoutes.js

const express = require("express");
const router = express.Router();
const logController = require("../controllers/logController");
const { body, validationResult } = require("express-validator");

// Middleware untuk validasi input
const validateLogInput = [
  body("UserId").notEmpty().withMessage("UserId harus diisi"),
  body("Password").notEmpty().withMessage("Tipe harus diisi"),
];

// Middleware untuk menangani hasil validasi
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Route untuk membuat log baru
router.post(
  "/",
  validateLogInput,
  handleValidationErrors,
  logController.createLog
);

// Tambahkan route lainnya jika diperlukan...
module.exports = router;
