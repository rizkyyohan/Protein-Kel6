const Penawaran = require("../models/Penawaran");
const Pemesanan = require("../models/Pemesanan");
const User = require("../models/User");

exports.createPenawaran = async (req, res) => {
  try {
    const { id_pemesanan, id_pemandu } = req.body;

    const pemesanan = await Pemesanan.findById(id_pemesanan);
    const pemandu = await User.findById(id_pemandu);

    if (!pemesanan || !pemandu) {
      return res
        .status(400)
        .json({ message: "Pemesanan atau Pemandu tidak ditemukan." });
    }

    const penawaran = new Penawaran({
      pemesanan: id_pemesanan,
      pemandu: id_pemandu,
      status_penawaran: "Pending",
    });

    const savedPenawaran = await penawaran.save();
    res.status(201).json(savedPenawaran);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create Penawaran", error });
  }

  
};
