const mongoose = require("mongoose");
const todoSchema = require("../schemas/TodoSchema");

const todoModel = mongoose.model("todo", todoSchema);

module.exports = todoModel;
