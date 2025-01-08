const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { verifyToken, verifyRole } = require("../middleware/authMiddleware");

// Middleware untuk otentikasi
router.use(verifyToken);

// Mendapatkan semua pengguna (hanya admin)
router.get("/", verifyRole("customer"), userController.getAllUsers);

// Mendapatkan data pengguna berdasarkan ID (hanya user sendiri atau admin)
router.get("/:id", authorizeUserAccess, userController.getUserById);

// Memperbarui data pengguna berdasarkan ID (hanya user sendiri atau admin)
router.put("/:id", authorizeUserAccess, userController.updateUser);

// Menghapus pengguna berdasarkan ID (hanya admin)
router.delete("/:id", verifyRole("customer"), userController.deleteUser);

// Middleware untuk autorisasi user
function authorizeUserAccess(req, res, next) {
  if (req.user.role === "customer" || req.user.id === req.params.id) {
    next();
  } else {
    return res.status(403).json({ message: "Forbidden" });
  }
}

module.exports = router;