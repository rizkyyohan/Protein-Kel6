const Log = require("../models/Log"); 

exports.createLog = async (req, res, next) => {
  try {
    const { userId, tipe, keterangan } = req.body;

    const newLog = new Log({
      userId,
      tipe,
      keterangan,
    });

    await newLog.save();

    next(); // Lanjutkan ke middleware atau controller selanjutnya
  } catch (error) {
    console.error("Error creating log:", error);
    // Tangani error sesuai kebutuhan, misalnya:
    // res.status(500).json({ message: "Gagal mencatat log" });
    next(error); // Lewatkan error ke middleware error handling
  }
};

exports.getAllLogs = async (req, res) => {
  try {
    const logs = await Log.find().populate("userId", "nama email"); // Populate data user
    res.status(200).json(logs);
  } catch (error) {
    console.error("Error fetching logs:", error);
    res.status(500).json({ message: "Gagal mengambil log" });
  }
};