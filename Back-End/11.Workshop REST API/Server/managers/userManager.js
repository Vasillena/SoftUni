const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jsonwebtoken");
const { SECRET } = require("../constants");

exports.register = async (email, password) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User exists");
  }

  if (password.length < 4) {
    throw new Error("Password too short!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({ email, password: hashedPassword });

  return this.login(email, password);
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Invalid email or password");
  }

  const payload = {
    _id: user._id,
    email: user.email,
  };
  const token = await jwt.sign(payload, SECRET);

  return {
    _id: user._id,
    email: user.email,
    accessToken: token,
  };
};
