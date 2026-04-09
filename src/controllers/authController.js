const authService = require("../services/authService");
const User = require("../models/User");

const register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);
    res.status(201).json({
      user: { id: result.user._id, email: result.user.email },
      accessToken: result.accessToken,
      refreshToken: result.refreshToken
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body.email, req.body.password);
    res.json({
      user: { id: result.user._id, email: result.user.email },
      accessToken: result.accessToken,
      refreshToken: result.refreshToken
    });
  } catch (err) {
    res.status(401);
    next(err);
  }
};

const getMe = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
};

const refresh = async (req, res, next) => {
  try {
    const tokens = await authService.refresh(req.body.refreshToken);
    res.json(tokens);
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res) => {
  await authService.logout(req.user.id);
  res.json({ message: "Logged out" });
};

module.exports = { register, login, getMe, refresh, logout };