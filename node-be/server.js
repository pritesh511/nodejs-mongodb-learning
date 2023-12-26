const express = require("express");
const { PORT, MONGO_LOCAL_URL } = require("./constant");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const todoRouter = require("./routes/todo.route");

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL || MONGO_LOCAL_URL)
  .then(() => {
    console.log("You are connected now with mongodb");
    app.listen(PORT, () => {
      console.log(`Yous server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/todo", todoRouter);
