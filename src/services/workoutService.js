const WorkoutPlan = require("../models/WorkoutPlan");
const WorkoutLog = require("../models/WorkoutLog");

const generateMuscleGainPlan = () => {
  return [
    { dayNumber: 1, dayName: "Monday", label: "Leg Day", isRest: false, estDuration: 55 },
    { dayNumber: 2, dayName: "Tuesday", label: "Arms", isRest: false, estDuration: 45 },
    { dayNumber: 3, dayName: "Wednesday", label: "Chest + Triceps", isRest: false, estDuration: 60 },
    { dayNumber: 4, dayName: "Thursday", label: "Rest", isRest: true },
    { dayNumber: 5, dayName: "Friday", label: "Back + Biceps", isRest: false, estDuration: 65 },
    { dayNumber: 6, dayName: "Saturday", label: "Shoulders", isRest: false, estDuration: 50 },
    { dayNumber: 7, dayName: "Sunday", label: "Rest", isRest: true }
  ];
};

const getPlan = async (user) => {
  let plan = await WorkoutPlan.findOne({ user, active: true });

  if (!plan) {
    const days = generateMuscleGainPlan();
    plan = await WorkoutPlan.create({ user, days, active: true });
  }

  return plan;
};

const regenPlan = async (user) => {
  await WorkoutPlan.updateMany({ user }, { active: false });

  const days = generateMuscleGainPlan();
  const plan = await WorkoutPlan.create({ user, days, active: true });

  return plan;
};

const logWorkout = async (user, data) => {
  const log = await WorkoutLog.create({ user, ...data });
  return log;
};

const getLogs = async (user) => {
  return await WorkoutLog.find({ user }).sort({ createdAt: -1 });
};

const updateLog = async (id, data) => {
  const log = await WorkoutLog.findByIdAndUpdate(id, data, { new: true });
  if (!log) throw new Error("Log not found");
  return log;
};

const deleteLog = async (id) => {
  await WorkoutLog.findByIdAndDelete(id);
};

module.exports = { getPlan, regenPlan, logWorkout, getLogs, updateLog, deleteLog };