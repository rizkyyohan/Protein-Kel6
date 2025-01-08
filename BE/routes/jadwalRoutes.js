const express = require("express");
const router = express.Router();
const jadwalController = require("../controllers/jadwalController");
const authMiddleware = require("../middleware/authMiddleware");

// Middleware untuk otentikasi
router.use(authMiddleware.verifyToken);

// Rute untuk Jadwal
// Hanya  pemandu yang boleh menambah, mengupdate, dan menghapus jadwal
router.post("/", authMiddleware.verifyRole([ 'pemandu']), jadwalController.addJadwal); 
router.put("/:id", authMiddleware.verifyRole([ 'pemandu']), jadwalController.updateJadwal);
router.delete("/:id", authMiddleware.verifyRole([ 'pemandu']), jadwalController.deleteJadwal);

// Semua user boleh melihat jadwal
router.get("/", jadwalController.getAllJadwal);
router.get("/:id", jadwalController.getJadwalById);


module.exports = router;