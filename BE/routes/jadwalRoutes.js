const express = require("express");
const router = express.Router();
const jadwalController = require("../controllers/jadwalController");
const authMiddleware = require("../middleware/authMiddleware");

// Middleware untuk otentikasi
router.use(authMiddleware.verifyToken);

// Rute untuk Jadwal
// Hanya admin dan pemandu yang boleh menambah, mengupdate, dan menghapus jadwal
router.post("/", authMiddleware.verifyRole(['admin', 'pemandu']), jadwalController.addJadwal); 
router.put("/:id", authMiddleware.verifyRole(['admin', 'pemandu']), jadwalController.updateJadwal);
router.delete("/:id", authMiddleware.verifyRole(['admin', 'pemandu']), jadwalController.deleteJadwal);

// Semua user boleh melihat jadwal
router.get("/", jadwalController.getAllJadwal);
router.get("/:id", jadwalController.getJadwalById);


module.exports = router;