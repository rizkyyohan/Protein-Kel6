const express = require("express");
const router = express.Router();
const guideController = require("../controllers/guideController");
const authMiddleware = require("../middleware/authMiddleware");

// Get all guides
router.get("/guides", guideController.getAllGuides);

// Get a guide by ID
router.get("/guides/:id", guideController.getGuideById);

// Create a new guide
// Hanya admin yang boleh membuat guide baru
router.post("/guides", authMiddleware.verifyToken, authMiddleware.verifyRole('customer'), guideController.createGuide); 

// Update a guide
// Hanya admin yang boleh mengupdate guide
router.put("/guides/:id", authMiddleware.verifyToken, authMiddleware.verifyRole('customer'), guideController.updateGuide);

// Delete a guide
// Hanya admin yang boleh menghapus guide
router.delete("/guides/:id", authMiddleware.verifyToken, authMiddleware.verifyRole('customer'),  guideController.deleteGuide); 

module.exports = router;
