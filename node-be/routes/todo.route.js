const express = require("express");
const {
  todoCreate,
  getAllTodos,
  deleteTodo,
} = require("../controllers/todo.controller");

const todoRouter = express.Router();

todoRouter.route("/").get(getAllTodos).post(todoCreate).delete(deleteTodo);

module.exports = todoRouter;
