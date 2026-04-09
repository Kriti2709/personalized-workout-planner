const service = require("../services/dietService");
const User = require("../models/User");

const getMacros = async (req, res) => {
  const user = await User.findById(req.user.id);
  const macros = service.calculateMacros(user);
  res.json(macros);
};

const getPlan = async (req, res) => {
  const user = await User.findById(req.user.id);
  const plan = service.getDietPlan(user);
  res.json(plan);
};

module.exports = { getMacros, getPlan };