const express = require("express");
const router = express.Router();
// const multer = require("multer");
// const multerConfig = require("../config/multer");

const User = require("../models/User");

router.get("/", async (req, res) => {
  const allowedPlayerTypes = ["teamPlayer", "partner"];
  const { playerType } = req.body;

  if (!allowedPlayerTypes.includes(playerType)) {
    return res.status(400).send({ error: "Invalid playerType." });
  }

  try {
    let players = await User.find({ playerType: playerType });
    const playerAmount = players.length;
    // Cleaning data to return just what we want.

    players.map((player) => {
      player.email = undefined;
      player.permissionLevel = undefined;
      player.__v = undefined;
      return player;
    });

    return res.status(200).json({ playerAmount, players });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

module.exports = (app) => app.use("/players", router);
