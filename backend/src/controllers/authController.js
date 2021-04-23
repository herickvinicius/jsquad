const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

function generateToken(params = {}) {
  return jwt.sign({ params }, authConfig.secret, {
    expiresIn: 86400,
  });
}

router.post("/register", async (req, res) => {
  const { email } = req.body;

  try {
    //Find in database email exists
    if (await User.findOne({ email })) {
      return res.status(400).send({ error: "User alredy exists" });
    }

    const user = await User.create(req.body);

    //Don't show in finder to database
    user.password = undefined;

    return res.send(user);
  } catch (err) {
    console.log(err);
    //If don't create, send to console a error massage
    return res.status(400).send({ error: "Registration failed" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (!user) return res.status(400).send({ error: "User not found" });

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).send({ error: "Invalid password" });

  user.password = undefined;

  res.send({
    user,
    token: generateToken({ id: user.id }),
  });
});

module.exports = (app) => app.use("/auth", router);
