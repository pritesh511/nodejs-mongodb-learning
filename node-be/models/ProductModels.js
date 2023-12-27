const mongoose = require("mongoose");
const productSchema = require("../schemas/ProductSchema");

const productModal = mongoose.model("product", productSchema);

module.exports = productModal;
