const productModal = require("../models/ProductModels");

exports.createProduct = async (product) => {
  return await productModal.create(product);
};

exports.getAllProduct = async () => {
  return await productModal.find();
};

exports.deleteProduct = async (id) => {
  return await productModal.findByIdAndDelete(id);
};
