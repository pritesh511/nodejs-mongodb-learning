import React from "react";
import TodoItem from "../components/TodoItem";
import { API_URL, GET, todoItem } from "@/constant";

async function getAllTodos() {
  try {
    const todoList = await fetch(API_URL + "/todo", {
      method: GET,
    });
    const todoListResp = await todoList.json();
    return todoListResp;
  } catch (error) {
    console.log("error", error);
  }
}

const Todo = async () => {
  const todoList = await getAllTodos();

  return (
    <div className="w-full h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="max-w-[1000px] mx-auto px-4 h-full">
        <div className="flex gap-3 py-6">
          <input
            placeholder="Please Enter Todo Title"
            className="p-3 rounded-lg w-full border-2 border-pink-500/100 focus:outline-none"
          />
          <button
            type="button"
            className="w-20 rounded-lg text-gray-50 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
          >
            Add
          </button>
        </div>
        <ul className="mt-4">
          {todoList.data.map((item: todoItem) => {
            return <TodoItem key={item._id} todo={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
