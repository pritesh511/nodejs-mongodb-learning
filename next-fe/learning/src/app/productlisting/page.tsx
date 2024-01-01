"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { API_URL, GET, productItem } from "@/constant";
import Link from "next/link";

const ProductListing = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getAllPoduct();
  }, []);
  async function getAllPoduct() {
    try {
      const productList = await fetch(API_URL + "/product", {
        method: GET,
      });
      const list = await productList.json();
      setProductList(list.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="py-4 text-center">
        <Link
          href="/"
          className="px-4 rounded-lg py-2 text-gray-50 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        >
          Back to home
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4 p-2">
        {productList?.map((item: productItem) => {
          return (
            <ProductCard
              key={item._id}
              product={item}
              getAllPoduct={getAllPoduct}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductListing;
