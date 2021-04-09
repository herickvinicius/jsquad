const mongoose = require("../database");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  imgPath: {
    type: String,
    require: true,
  }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
