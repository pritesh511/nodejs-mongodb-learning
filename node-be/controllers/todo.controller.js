const todoService = require("../services/todo.service");

exports.todoCreate = async (req, res) => {
  try {
    const todo = await todoService.createTodo(req.body);
    res.status(200).json({ todo, message: "Todo added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllTodos = async (_req, res) => {
  try {
    const todoList = await todoService.getAllTodos();
    res.status(200).json({ data: todoList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await todoService.deleteTodo(req.query.id);
    res.status(200).json({ message: "Todo is deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    await todoService.updateTodo(req.query.id, req.body);
    res.status(200).json({ message: "Todo is updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
