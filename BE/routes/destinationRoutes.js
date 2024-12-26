const express = require("express");
const router = express.Router();
const destinationController = require("../controllers/destinationController");
const authMiddleware = require("../middleware/authMiddleware");


// Routes for destinations
router.get("/", destinationController.getAllDestinations);
router.get("/:id", destinationController.getDestinationById);

// Hanya admin yang boleh membuat, mengupdate, dan menghapus destinasi
router.post("/", authMiddleware.verifyToken, authMiddleware.verifyRole('admin'), destinationController.createDestination); 
router.put("/:id", authMiddleware.verifyToken, authMiddleware.verifyRole('admin'), destinationController.updateDestination);
router.delete("/:id", authMiddleware.verifyToken, authMiddleware.verifyRole('admin'), destinationController.deleteDestination);

module.exports = router;