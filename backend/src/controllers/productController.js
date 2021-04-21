const express = require("express");
const router = express.Router();
const multer = require('multer');
const multerConfig= require("../config/multer");

const Product = require("../models/Product");

router.post("/product",multer(multerConfig).single("image"), async (req,res)=>{
    const  { originalname: name, size, key} = req.file; 
    const product = await Product.create({
        name,
        size,
        key,
        url
      });
    return res.json(product);
});

module.exports = (app) => app.use("/product", router);