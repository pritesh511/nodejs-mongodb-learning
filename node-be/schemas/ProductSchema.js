const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter product name"],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    require: [true, "Please enter product price"],
  },
  discount: {
    type: Number,
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    require: [true, "Please select product image"],
  },
});

module.exports = productSchema;
