// routes/logRoutes.js

const express = require("express");
const router = express.Router();
const logController = require("../controllers/logController");
const { body } = require('express-validator'); 

// Validasi input
const validateLogInput = [
  body('userId').notEmpty().withMessage('UserId harus diisi'),
  body('tipe').notEmpty().withMessage('Tipe harus diisi'),
  // ... validasi field lainnya
];

// Route untuk membuat log baru
router.post("/", validateLogInput, logController.createLog, (req, res) => {
  res.status(201).json({ message: "Log berhasil dibuat" });
});

// ...