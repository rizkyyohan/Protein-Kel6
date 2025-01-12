const Pemesanan = require("../models/Pemesanan");

// Membuat pemesanan baru
exports.createPemesanan = async (req, res) => {
  try {
    const newPemesanan = new Pemesanan(req.body);
    const savedPemesanan = await newPemesanan.save();
    res.status(201).json(savedPemesanan);
  } catch (error) {
    res.status(500).json({ message: "Gagal membuat pemesanan", error });
  }
};

// Mendapatkan semua pemesanan
exports.getAllPemesanan = async (req, res) => {
  try {
    const pemesanan = await Pemesanan.find().populate("pengguna pemandu destinasi");
    res.status(200).json(pemesanan);
  } catch (error) {
    res.status(500).json({ message: "Gagal mendapatkan data pemesanan", error });
  }
};

// Mendapatkan pemesanan berdasarkan ID
exports.getPemesananById = async (req, res) => {
  try {
    const pemesanan = await Pemesanan.findById(req.params.id).populate("pengguna pemandu destinasi");
    if (!pemesanan) {
      return res.status(404).json({ message: "Pemesanan tidak ditemukan" });
    }
    res.status(200).json(pemesanan);
  } catch (error) {
    res.status(500).json({ message: "Gagal mendapatkan data pemesanan", error });
  }
};

// Memperbarui pemesanan berdasarkan ID
exports.updatePemesananById = async (req, res) => {
  try {
    const updatedPemesanan = await Pemesanan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedPemesanan) {
      return res.status(404).json({ message: "Pemesanan tidak ditemukan" });
    }
    res.status(200).json(updatedPemesanan);
  } catch (error) {
    res.status(500).json({ message: "Gagal memperbarui pemesanan", error });
  }
};

// Menghapus pemesanan berdasarkan ID
exports.deletePemesananById = async (req, res) => {
  try {
    const deletedPemesanan = await Pemesanan.findByIdAndDelete(req.params.id);
    if (!deletedPemesanan) {
      return res.status(404).json({ message: "Pemesanan tidak ditemukan" });
    }
    res.status(200).json({ message: "Pemesanan berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus pemesanan", error });
  }
};
