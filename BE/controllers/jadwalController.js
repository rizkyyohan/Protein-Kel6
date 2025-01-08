const Jadwal = require("../models/jadwal");

// Menambahkan Jadwal baru
exports.addJadwal = async (req, res) => {
  const { id_penawaran, id_pemandu, tanggal } = req.body;

  try {
    const newJadwal = new Jadwal({
      id_penawaran,
      id_pemandu,
      tanggal,
    });

    await newJadwal.save();
    res.status(201).json({ message: "Jadwal berhasil ditambahkan", jadwal: newJadwal });
  } catch (error) {
    res.status(400).json({ message: "Gagal menambahkan jadwal", error });
  }
};

// Mengambil semua Jadwal
exports.getAllJadwal = async (req, res) => {
  try {
    const jadwals = await Jadwal.find().populate("penawaran pemandu", "nama email");
    res.status(200).json(jadwals);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil jadwal", error });
  }
};

// Mengambil Jadwal berdasarkan id
exports.getJadwalById = async (req, res) => {
  const { id } = req.params;

  try {
    const jadwal = await Jadwal.findById(id).populate("penawaran pemandu", "nama email");

    if (!jadwal) {
      return res.status(404).json({ message: "Jadwal tidak ditemukan" });
    }

    res.status(200).json(jadwal);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil jadwal", error });
  }
};

// Memperbarui Jadwal
exports.updateJadwal = async (req, res) => {
  const { id } = req.params;
  const { id_penawaran, id_pemandu, tanggal } = req.body;

  try {
    const updatedJadwal = await Jadwal.findByIdAndUpdate(
      id,
      { id_penawaran, id_pemandu, tanggal },
      { new: true }
    );

    if (!updatedJadwal) {
      return res.status(404).json({ message: "Jadwal tidak ditemukan" });
    }

    res.status(200).json({ message: "Jadwal berhasil diperbarui", jadwal: updatedJadwal });
  } catch (error) {
    res.status(400).json({ message: "Gagal memperbarui jadwal", error });
  }
};

// Menghapus Jadwal
exports.deleteJadwal = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedJadwal = await Jadwal.findByIdAndDelete(id);

    if (!deletedJadwal) {
      return res.status(404).json({ message: "Jadwal tidak ditemukan" });
    }

    res.status(200).json({ message: "Jadwal berhasil dihapus" });
  } catch (error) {
    res.status(400).json({ message: "Gagal menghapus jadwal", error });
  }
};
