const express = require("express");
const router = express.Router();
const controller = require("../controllers/dietController");
const { protect } = require("../middleware/authMiddleware");

router.get("/macros", protect, controller.getMacros);
router.get("/plan", protect, controller.getPlan);

module.exports = router;