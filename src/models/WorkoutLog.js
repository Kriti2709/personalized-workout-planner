const mongoose = require("mongoose");

const setSchema = new mongoose.Schema({
  setNumber: Number,
  weight: Number,
  reps: Number,
  completed: Boolean,
  notes: String
});

const exerciseSchema = new mongoose.Schema({
  exerciseName: String,
  muscleGroup: String,
  sets: [setSchema],
  isPR: { type: Boolean, default: false }
});

const workoutLogSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: { type: Date, default: Date.now },
    dayLabel: String,
    exercises: [exerciseSchema],
    duration: Number,
    calories: Number,
    totalVolume: Number,
    notes: String,
    rating: Number
  },
  { timestamps: true }
);

// 🔥 Auto-calculate totalVolume
workoutLogSchema.pre("save", function (next) {
  let volume = 0;

  this.exercises.forEach((ex) => {
    ex.sets.forEach((set) => {
      volume += (set.weight || 0) * (set.reps || 0);
    });
  });

  this.totalVolume = volume;
  next();
});

module.exports = mongoose.model("WorkoutLog", workoutLogSchema);