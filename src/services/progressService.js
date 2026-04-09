const WorkoutLog = require("../models/WorkoutLog");

const getWeeklyStats = async (user) => {
  const logs = await WorkoutLog.find({ user });

  const totalCalories = logs.reduce((sum, l) => sum + (l.calories || 0), 0);
  const totalDuration = logs.reduce((sum, l) => sum + (l.duration || 0), 0);
  const totalVolume = logs.reduce((sum, l) => sum + (l.totalVolume || 0), 0);

  return {
    sessionsThisWeek: logs.length,
    totalCalories,
    totalDuration,
    totalVolume
  };
};

const getProgressChart = async (user, weeks = 8) => {
  const logs = await WorkoutLog.find({ user });

  const data = [];
  for (let i = 0; i < weeks; i++) {
    data.push({
      week: i + 1,
      volume: logs.reduce((sum, l) => sum + (l.totalVolume || 0), 0),
      sessions: logs.length
    });
  }
  return data;
};

const getMuscleStrength = async (user) => {
  const logs = await WorkoutLog.find({ user });

  const result = {};

  logs.forEach((log) => {
    log.exercises.forEach((ex) => {
      const group = ex.muscleGroup;
      if (!result[group]) {
        result[group] = { maxWeight: 0, sessions: 0 };
      }

      ex.sets.forEach((set) => {
        if (set.weight > result[group].maxWeight) {
          result[group].maxWeight = set.weight;
        }
      });

      result[group].sessions += 1;
    });
  });

  return result;
};

const getAdherence = async (user, target = 4) => {
  const logs = await WorkoutLog.find({ user });
  const count = logs.length;

  const rate = Math.min((count / target) * 100, 100);

  return { count, target, rate };
};

module.exports = {
  getWeeklyStats,
  getProgressChart,
  getMuscleStrength,
  getAdherence
};