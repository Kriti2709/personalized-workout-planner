const service = require("../services/workoutService");

const getPlan = async (req, res, next) => {
  try {
    const plan = await service.getPlan(req.user.id);
    res.json(plan);
  } catch (err) {
    next(err);
  }
};

const regenPlan = async (req, res, next) => {
  try {
    const plan = await service.regenPlan(req.user.id);
    res.json(plan);
  } catch (err) {
    next(err);
  }
};

const logWorkout = async (req, res, next) => {
  try {
    const log = await service.logWorkout(req.user.id, req.body);
    res.status(201).json(log);
  } catch (err) {
    next(err);
  }
};

const getLogs = async (req, res, next) => {
  try {
    const logs = await service.getLogs(req.user.id);
    res.json(logs);
  } catch (err) {
    next(err);
  }
};

const updateLog = async (req, res, next) => {
  try {
    const log = await service.updateLog(req.params.id, req.body);
    res.json(log);
  } catch (err) {
    next(err);
  }
};

const deleteLog = async (req, res, next) => {
  try {
    await service.deleteLog(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = { getPlan, regenPlan, logWorkout, getLogs, updateLog, deleteLog };