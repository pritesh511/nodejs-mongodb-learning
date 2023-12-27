const express = require("express");
const {
  todoCreate,
  getAllTodos,
  deleteTodo,
  updateTodo,
} = require("../controllers/todo.controller");

const todoRouter = express.Router();

todoRouter
  .route("/")
  .get(getAllTodos)
  .post(todoCreate)
  .delete(deleteTodo)
  .put(updateTodo);

module.exports = todoRouter;
