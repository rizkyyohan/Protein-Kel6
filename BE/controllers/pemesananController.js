const Pemesanan = require("../models/Pemesanan");
const Guide = require("../models/Guide");
const Destination = require("../models/Destination");
const User = require("../models/User");

exports.createPemesanan = async (req, res) => {
  try {
    const { pengguna, pemandu, destinasi, alamat, tanggal_pemesanan } = req.body;

    // Validasi jika pemandu, destinasi, dan pengguna ada
    const guide = await Guide.findById(pemandu);
    const destination = await Destination.findById(destinasi);
    const user = await User.findById(pengguna);

    if (!guide || !destination || !user) {
      return res.status(404).json({
        message: "Guide, Destination, or User not found",
      });
    }

    // Membuat pemesanan baru
    const pemesanan = new Pemesanan({
      pengguna,
      pemandu,
      destinasi,
      alamat,
      tanggal_pemesanan,
    });

    // Menyimpan pemesanan ke database
    const savedPemesanan = await pemesanan.save();
    res.status(201).json(savedPemesanan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create Pemesanan", error });
  }
};

exports.getAllPemesanan = async (req, res) => {
  try {
    const pemesanan = await Pemesanan.find()
      .populate("pengguna", "nama email")
      .populate("pemandu", "nama pengalaman")
      .populate("destinasi", "nama lokasi");

    res.status(200).json(pemesanan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch Pemesanan", error });
  }
};

exports.getPemesananById = async (req, res) => {
  try {
    const { id } = req.params;

    const pemesanan = await Pemesanan.findById(id)
      .populate("pengguna", "nama email")
      .populate("pemandu", "nama pengalaman")
      .populate("destinasi", "nama lokasi");

    if (!pemesanan) {
      return res.status(404).json({ message: "Pemesanan not found" });
    }

    res.status(200).json(pemesanan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch Pemesanan", error });
  }
};

exports.updatePemesanan = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const pemesanan = await Pemesanan.findById(id);
    if (!pemesanan) {
      return res.status(404).json({ message: "Pemesanan not found" });
    }

    pemesanan.status = status || pemesanan.status;

    const updatedPemesanan = await pemesanan.save();
    res.status(200).json(updatedPemesanan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update Pemesanan", error });
  }
};

exports.deletePemesanan = async (req, res) => {
  try {
    const { id } = req.params;

    const pemesanan = await Pemesanan.findByIdAndDelete(id);
    if (!pemesanan) {
      return res.status(404).json({ message: "Pemesanan not found" });
    }

    res.status(200).json({ message: "Pemesanan deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete Pemesanan", error });
  }
};
