const User = require("../models/User");
const config = require("../config");
const jwt = require("../lib/jsonwebtoken");
const { AppError } = require("../utils/AppError");

exports.getUserByUsername = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });

exports.login = async (username, password) => {
  const user = await this.getUserByUsername(username);

  if (!user) {
    throw new AppError("Invalid username!", { user });

    // throw {
    //   message: "Invalid username!",
    //   data: user,
    // };
  }

  const isValid = await user.validatePassword(password);
  if (!user || !isValid) {
    throw new Error("Invalid password!");
  }

  const payload = { _id: user._id, username: user.username };
  const token = await jwt.sign(payload, config.SECRET, { expiresIn: "2h" });

  return token;
};
