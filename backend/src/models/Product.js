const mongoose = require("../database");

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    require: true,
    unique: true,
  },
  path: {
    type: String,
    require: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
