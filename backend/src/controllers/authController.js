const express = require("express");
const { findOne } = require("../models/User");

const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.create(req.body);
    //if (await User.findOne({ email })){
      //console.log(user);
      //return res.status(400).send({ error: "User already exists" });
    //Don't show in finder to database
     delete user.password
    return res.send({ user });
  }catch(err) {
    console.log(err);
    return res.status(400).send({ error: "Registration failed" });
  }
});

module.exports = (app) => app.use("/auth", router);