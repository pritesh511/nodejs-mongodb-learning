import Image from "next/image";
import React from "react";

const Todo = () => {
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
          <li className="rounded-lg px-5 py-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-between">
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="link"
              >
                <input
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="link"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px font-light text-gray-700 cursor-pointer select-none"
                htmlFor="link"
              >
                <p className="flex font-sans text-base antialiased font-medium leading-relaxed text-gray-50">
                  I agree with the
                </p>
              </label>
            </div>
            <button
              type="button"
              className="w-20 rounded-lg py-2 text-gray-50 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
