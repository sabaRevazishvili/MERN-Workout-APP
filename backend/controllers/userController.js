const User = require("../models/UserModel");

//login user

const LoginUSer = async (req, res) => {
  res.json({ mssg: "login user" });
};

//signup user

const SignupUSer = async (req, res) => {
  res.json({ mssg: "sign up user" });
};

module.exports = { LoginUSer, SignupUSer };
