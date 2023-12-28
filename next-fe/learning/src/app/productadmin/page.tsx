"use client";
import { API_URL, POST } from "@/constant";
import Link from "next/link";
import React, { useState } from "react";

const BlogAdmin = () => {
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: 0,
    discount: 0,
    image: "",
  });

  function handleProductFormInput(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("productForm", productForm);
    switch (e.target.name) {
      case "name":
        setProductForm({
          ...productForm,
          name: e.target.value,
        });
        break;
      case "description":
        setProductForm({
          ...productForm,
          description: e.target.value,
        });
        break;
      case "price":
        setProductForm({
          ...productForm,
          price: Number(e.target.value),
        });
        break;
      case "discount":
        setProductForm({
          ...productForm,
          discount: Number(e.target.value),
        });
        break;
      case "image":
        setProductForm({
          ...productForm,
          image: e.target.value,
        });
        break;
    }
  }

  async function handleProductFormSubmit(e: any) {
    e.preventDefault();
    const createProduct = await fetch(API_URL + "/product", {
      method: POST,
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(productForm),
    });
    const response = await createProduct.json();
    if (response.status == 200) {
      setProductForm({
        name: "",
        description: "",
        price: 0,
        discount: 0,
        image: "",
      });
    }
  }

  return (
    <div className="bg-gray-900 w-full h-screen flex items-center justify-center">
      <div className="max-w-[400px] w-full px-4">
        <form className="w-full mx-auto" onSubmit={handleProductFormSubmit}>
          <div className="mb-5">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-white"
            >
              Enter product name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleProductFormInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter product description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              onChange={handleProductFormInput}
              placeholder="Enter product description"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-white"
            >
              Enter product price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={handleProductFormInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter product price"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-white"
            >
              Enter product discount
            </label>
            <input
              type="number"
              id="discount"
              name="discount"
              onChange={handleProductFormInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter product discount"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-white"
            >
              Enter product image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              onChange={handleProductFormInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter product image URL"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        <Link
          href="/productlisting"
          className="block underline my-4 text-sm font-medium text-white"
        >
          Go to the product list page
        </Link>
      </div>
    </div>
  );
};

export default BlogAdmin;
