const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },

    age: Number,
    gender: { type: String, enum: ["male", "female", "other"] },
    weight: Number,
    height: Number,
    bodyFat: Number,

    goal: {
      type: String,
      enum: ["weight_loss", "muscle_gain", "strength", "endurance"]
    },

    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"]
    },

    role: { type: String, default: "user" },

    streak: { type: Number, default: 0 },
    lastActive: Date,

    refreshToken: String,

    notifications: {
      workoutReminders: { type: Boolean, default: true },
      smsEnabled: { type: Boolean, default: false },
      emailReports: { type: Boolean, default: true },
      aiSuggestions: { type: Boolean, default: true }
    }
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", userSchema);