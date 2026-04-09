const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/profile", protect, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

router.put("/profile", protect, async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user.id, req.body, { new: true }).select("-password");
  res.json(user);
});

router.get("/all", protect, adminOnly, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

module.exports = router;