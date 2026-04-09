require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const { initRedis } = require("./config/redis");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();
app.use(express.json());

if (process.env.NODE_ENV !== "test") {
  connectDB();
  initRedis();
}

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/workouts", require("./routes/workoutRoutes"));
app.use("/api/progress", require("./routes/progressRoutes"));
app.use("/api/diet", require("./routes/dietRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}
module.exports = app;