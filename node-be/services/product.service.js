const productModal = require("../models/ProductModels");

exports.createProduct = async (product) => {
  return await productModal.create(product);
};

exports.getAllProduct = async () => {
  return await productModal.find();
};
