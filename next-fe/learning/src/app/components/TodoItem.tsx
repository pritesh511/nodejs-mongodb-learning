import { API_URL, DELETE } from "@/constant";
import React from "react";

const TodoItem = (props: any) => {
  const { todo, getAllTodos } = props;

  async function deleteTodo(id: string) {
    const createTodo = await fetch(API_URL + `/todo?id=${id}`, {
      method: DELETE,
      headers: {
        "content-Type": "application/json",
      },
    });
    const createTodoResp = await createTodo.json();
    console.log(createTodoResp);
    getAllTodos();
  }

  return (
    <li className="rounded-lg my-2 px-4 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-between">
      <div className="inline-flex items-center">
        <label
          className="relative flex items-center p-3 rounded-full cursor-pointer"
          htmlFor={todo?._id}
        >
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
            id={todo?._id}
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
        <label
          className="mt-px font-light text-gray-700 cursor-pointer select-none"
          htmlFor={todo?._id}
        >
          <p className="flex font-sans text-base antialiased font-medium leading-relaxed text-gray-50">
            {todo?.title}
          </p>
        </label>
      </div>
      <button
        type="button"
        onClick={() => deleteTodo(todo?._id)}
        className="w-20 rounded-lg py-2 text-gray-50 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
