const Rating = require("../models/Rating");

// Menambahkan rating
const addRating = async (req, res) => {
  try {
    const { pengguna, destinasi, star_rate, komen } = req.body;

    // Validasi jika pengguna dan destinasi ada
    if (!pengguna || !destinasi) {
      return res
        .status(400)
        .json({ message: "Pengguna dan Destinasi harus diisi." });
    }

    // Membuat rating baru
    const newRating = new Rating({
      pengguna,
      destinasi,
      star_rate,
      komen,
    });

    // Simpan ke database
    const savedRating = await newRating.save();
    res.status(201).json({
      message: "Rating added successfully",
      rating: savedRating,
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to add rating",
      details: err.message,
    });
  }
};

// Mendapatkan rating berdasarkan destinasi
const getRatingsByDestinasi = async (req, res) => {
  try {
    const { destinasi } = req.params;

    const ratings = await Rating.find({ destinasi }).populate(
      "pengguna",
      "nama email"
    );

    if (!ratings || ratings.length === 0) {
      return res.status(404).json({ message: "Ratings not found for this destinasi." });
    }

    res.status(200).json({ ratings });
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch ratings",
      details: err.message,
    });
  }
};

// Mendapatkan rating berdasarkan pengguna
const getRatingsByUser = async (req, res) => {
  try {
    const { pengguna } = req.params;

    const ratings = await Rating.find({ pengguna }).populate(
      "destinasi",
      "nama lokasi"
    );

    if (!ratings || ratings.length === 0) {
      return res.status(404).json({ message: "Ratings not found for this user." });
    }

    res.status(200).json({ ratings });
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch ratings",
      details: err.message,
    });
  }
};

// Mengupdate rating berdasarkan ID
const updateRating = async (req, res) => {
  try {
    const { id } = req.params;
    const { star_rate, komen } = req.body;

    const updatedRating = await Rating.findByIdAndUpdate(
      id,
      { star_rate, komen },
      { new: true }
    );

    if (!updatedRating) {
      return res.status(404).json({ message: "Rating not found" });
    }

    res.status(200).json({
      message: "Rating updated successfully",
      rating: updatedRating,
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to update rating",
      details: err.message,
    });
  }
};

// Menghapus rating berdasarkan ID
const deleteRating = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRating = await Rating.findByIdAndDelete(id);

    if (!deletedRating) {
      return res.status(404).json({ message: "Rating not found" });
    }

    res.status(200).json({ message: "Rating deleted successfully" });
  } catch (err) {
    res.status(500).json({
      error: "Failed to delete rating",
      details: err.message,
    });
  }
};

module.exports = {
  addRating,
  getRatingsByDestinasi,
  getRatingsByUser,
  updateRating,
  deleteRating,
};
