const service = require("../services/progressService");

const getWeekly = async (req, res, next) => {
  try {
    const data = await service.getWeeklyStats(req.user.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

const getChart = async (req, res, next) => {
  try {
    const weeks = req.query.weeks || 8;
    const data = await service.getProgressChart(req.user.id, weeks);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

const getMuscles = async (req, res, next) => {
  try {
    const data = await service.getMuscleStrength(req.user.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

const getAdherence = async (req, res, next) => {
  try {
    const target = req.query.target || 4;
    const data = await service.getAdherence(req.user.id, target);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = { getWeekly, getChart, getMuscles, getAdherence };