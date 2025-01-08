const express = require("express");
const router = express.Router();
const guideController = require("../controllers/guideController");
const authMiddleware = require("../middleware/authMiddleware");

// Create a new guide (Hanya customer yang dapat membuat guide)
router.post("/guides", authMiddleware.verifyToken, authMiddleware.verifyRole('customer'), guideController.createGuide); 

// Rute lainnya
router.get("/guides", guideController.getAllGuides);
router.get("/guides/:id", guideController.getGuideById);
router.put("/guides/:id", authMiddleware.verifyToken, authMiddleware.verifyRole('customer'), guideController.updateGuide);
router.delete("/guides/:id", authMiddleware.verifyToken, authMiddleware.verifyRole('customer'), guideController.deleteGuide);

module.exports = router;
