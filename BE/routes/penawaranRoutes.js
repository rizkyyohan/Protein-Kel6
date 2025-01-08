const express = require("express");
const router = express.Router();
const penawaranController = require("../controllers/penawaranController");
const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware.verifyToken);
router.post("/", penawaranController.createPenawaran);

module.exports = router;
