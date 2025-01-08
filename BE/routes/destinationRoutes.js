const express = require("express");
const router = express.Router();
const destinationController = require("../controllers/destinationController");
const authMiddleware = require("../middleware/authMiddleware");


// Routes for destinations
router.get("/", destinationController.getAllDestinations);
router.get("/:id", destinationController.getDestinationById);

// Hanya admin yang boleh membuat, mengupdate, dan menghapus destinasi
router.put("/:id", authMiddleware.verifyToken, authMiddleware.verifyRole('customer'), destinationController.updateDestination);
router.delete("/:id", authMiddleware.verifyToken, authMiddleware.verifyRole('customer'), destinationController.deleteDestination);

module.exports = router;