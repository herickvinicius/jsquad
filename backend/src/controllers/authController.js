const express = require("express");

const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
    console.log(req.body)
    const { email } = req.body;

  try {
    //Find in database email exists
    //if (await User.findOne({ email })) {
     //   return res.status(400).send({ error: "User alredy exists" });
    
    const user = await User.create(req.body);

    //Don't show in finder to database
    user.password = undefined;

    return res.send({ user });
  } catch (err) {
        console.log(err);
        return res.status(400).send({ error: "Registration failed" });
  }
});

module.exports = (app) => app.use("/auth", router);