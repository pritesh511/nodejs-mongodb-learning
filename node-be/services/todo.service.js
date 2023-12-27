const todoModel = require("../models/TodoModels");

exports.createTodo = async (todo) => {
  return await todoModel.create(todo);
};

exports.getAllTodos = async () => {
  return await todoModel.find();
};

exports.updateTodo = async (id, todo) => {
  return await todoModel.findByIdAndUpdate(id, todo);
};

exports.deleteTodo = async (id) => {
  return await todoModel.findByIdAndDelete(id);
};
