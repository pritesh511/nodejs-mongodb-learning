const todoModel = require("../models/TodoModels");

exports.createTodo = async (todo) => {
  return await todoModel.create(todo);
};

exports.getAllTodos = async () => {
  return await todoModel.find();
};
