const express = require("express");
const router = express.Router();
const controller = require("../controllers/progressController");
const { protect } = require("../middleware/authMiddleware");

router.get("/weekly", protect, controller.getWeekly);
router.get("/chart", protect, controller.getChart);
router.get("/muscles", protect, controller.getMuscles);
router.get("/adherence", protect, controller.getAdherence);

module.exports = router;