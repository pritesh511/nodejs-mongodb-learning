const express = require("express");
const {
  createProduct,
  getAllProduct,
} = require("../controllers/product.controller");

const productRouter = express.Router();

productRouter.route("/").post(createProduct).get(getAllProduct);

module.exports = productRouter;
