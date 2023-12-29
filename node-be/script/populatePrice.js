const mongoose = require("mongoose");
const { MONGO_LOCAL_URL } = require("../constant");
const productModal = require("../models/ProductModels");

async function updateTotalPrice() {
  mongoose
    .connect(process.env.MONGO_URL || MONGO_LOCAL_URL)
    .then(async () => {
      console.log("You are connected now with mongodb");
      const allList = await productModal.find();
      allList.map(async (item) => {
        const newBody = {
          name: item.name,
          description: item.description,
          price: item.price,
          discount: item.discount,
          totalPrice: item.price - item.discount,
          image: item.image,
        };
        await productModal.findOneAndUpdate(item._id, newBody, {
          returnOriginal: false,
        });
      });
    })
    .catch((error) => console.log(error));
}

updateTotalPrice();
