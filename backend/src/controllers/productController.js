const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerConfig = require("../config/multer");

const Product = require("../models/Product");

router.post(
  "/register",
  multer(multerConfig).single("image"),
  async (req, res) => {
    try {
      const productName = req.body.productName;
      const { path } = req.file;

      console.log(productName);
      if (productName === "" || undefined) {
        return res
          .status(400)
          .send({ error: "Cannot register a product without a name." });
      }

      if (await Product.findOne({ productName })) {
        return res.status(400).send({ error: "Product alredy registered." });
      }

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
    } catch (error) {
      console.log(error.message);
      return res.status(400).send({ error: "Registration failed" });
    }
  }
);

router.get("/getProducts", async (req, res) => {
  try {
    const products = await Product.find({});
    console.log(products);
    const productAmount = products.length;
    return res.status(200).json({ productAmount, products });
  } catch (error) {
    console.log(error.message);
    return res.status(400).send({ error: error.message });
  }
});

module.exports = (app) => app.use("/product", router);
