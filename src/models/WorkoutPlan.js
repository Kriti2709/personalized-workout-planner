const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: String,
  muscleGroup: String,
  sets: Number,
  reps: Number,
  weight: Number,
  restSeconds: Number,
  notes: String
});

const daySchema = new mongoose.Schema({
  dayNumber: Number,
  dayName: String,
  label: String,
  muscleGroup: String,
  isRest: Boolean,
  exercises: [exerciseSchema],
  estDuration: Number
});

const workoutPlanSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    goal: String,
    level: String,
    days: [daySchema],
    version: { type: Number, default: 1 },
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("WorkoutPlan", workoutPlanSchema);