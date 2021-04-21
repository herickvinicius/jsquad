const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerConfig = require("../config/multer");

const Product = require("../models/Product");

router.post(
  "/register",
  multer(multerConfig).single("image"),
  async (req, res) => {
    const productName = req.body.productName;
    const { path } = req.file;
    console.log(
      `
    ===============
    Product ${productName} being inserted.
    Image Path: ${path}
    ===============
    `
    );
    const product = await Product.create({
      productName,
      path,
    });
    return res.json(product);
    // return res.json({ OK: "Image sent successfully." });
  }
);

module.exports = (app) => app.use("/product", router);
