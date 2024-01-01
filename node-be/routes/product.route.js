const express = require("express");
const {
  createProduct,
  getAllProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const productRouter = express.Router();

productRouter
  .route("/")
  .post(createProduct)
  .get(getAllProduct)
  .delete(deleteProduct);

module.exports = productRouter;
