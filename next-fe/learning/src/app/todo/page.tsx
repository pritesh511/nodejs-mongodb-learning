"use client";
import React, { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { API_URL, GET, POST, todoItem } from "@/constant";

const Todo = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoTitleError, setTodoTitleError] = useState(false);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getAllTodos();
  }, []);

  async function getAllTodos() {
    try {
      const todoList = await fetch(API_URL + "/todo", {
        method: GET,
      });
      const todoListResp = await todoList.json();
      setTodoList(todoListResp.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  async function createTodo() {
    if (todoTitle != "") {
      const body = {
        title: todoTitle,
        isCompleted: false,
      };
      const createTodo = await fetch(API_URL + "/todo", {
        method: POST,
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const createTodoResp = await createTodo.json();
      console.log(createTodoResp);
      setTodoTitle("");
      getAllTodos();
    } else {
      setTodoTitleError(true);
    }
  }

  return (
    <div className="w-full h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="max-w-[1000px] mx-auto px-4 h-full">
        <div className="flex gap-3 pt-6">
          <input
            onChange={(e) => {
              setTodoTitle(e.target.value);
              setTodoTitleError(false);
            }}
            value={todoTitle}
            placeholder="Please Enter Todo Title"
            className="p-3 rounded-lg w-full border-2 border-pink-500/100 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => createTodo()}
            className=" w-20 rounded-lg text-gray-50 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
          >
            Add
          </button>
        </div>
        {todoTitleError && (
          <span className="text-red-900">Please Enter todo title</span>
        )}
        <ul className="mt-4 h-[calc(100vh_-_97px)] overflow-auto">
          {todoList.map((item: todoItem) => {
            return (
              <TodoItem key={item._id} todo={item} getAllTodos={getAllTodos} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
