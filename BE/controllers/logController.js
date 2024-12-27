const Log = require("../models/Log");
const { validationResult } = require('express-validator'); 
const mongoose = require('mongoose');

exports.createLog = async (req, res, next) => {
  try {
    // Validasi input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { userId, tipe, keterangan, ipAddress, userAgent, requestBody, requestHeaders } = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    const newLog = new Log({
      userId,
      tipe,
      keterangan,
      ipAddress,
      userAgent,
      requestBody,
      requestHeaders,
      timestamp: new Date()
    });

    await newLog.save();

    next();
  } catch (error) {
    console.error("Error creating log:", error);
    next(error);
  }
};

exports.getAllLogs = async (req, res) => {
  try {
    const logs = await Log.find().populate("userId", "nama email");
    res.status(200).json(logs);
  } catch (error) {
    console.error("Error fetching logs:", error);
    res.status(500).json({ message: "Gagal mengambil log" });
  }
};