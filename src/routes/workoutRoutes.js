const express = require("express");
const router = express.Router();
const controller = require("../controllers/workoutController");
const { protect } = require("../middleware/authMiddleware");

router.get("/plan", protect, controller.getPlan);
router.post("/plan/regen", protect, controller.regenPlan);

router.get("/log", protect, controller.getLogs);
router.post("/log", protect, controller.logWorkout);
router.put("/log/:id", protect, controller.updateLog);
router.delete("/log/:id", protect, controller.deleteLog);

module.exports = router;