const express = require("express");
const { todoCreate, getAllTodos } = require("../controllers/todo.controller");

const todoRouter = express.Router();

todoRouter.route("/").get(getAllTodos).post(todoCreate);

module.exports = todoRouter;
