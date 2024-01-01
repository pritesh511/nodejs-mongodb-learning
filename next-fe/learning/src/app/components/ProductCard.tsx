/* eslint-disable @next/next/no-img-element */
import { API_URL, DELETE, productItem } from "@/constant";
import React from "react";

interface props {
  product: productItem;
  getAllPoduct: any;
}

const ProductCard = (props: props) => {
  const { product, getAllPoduct } = props;

  async function handleDeleteProduct(id: string) {
    const URL = API_URL + "/product" + `?id=${id}`;
    try {
      const deleteProduct = await fetch(URL, {
        method: DELETE,
      });
      const resp = await deleteProduct.json();
      console.log(resp);
      getAllPoduct();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="h-[240px]">
        <img
          className="rounded-t-lg w-full h-full"
          src={product?.image}
          alt=""
        />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product?.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product?.description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Price Rs.{product?.price}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Discount Rs.{product?.discount}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Total Rs.{product?.totalPrice}
        </p>
        <p
          onClick={() => handleDeleteProduct(product._id)}
          className="mb-3 font-normal text-gray-700 dark:text-gray-400 underline cursor-pointer"
        >
          Delete Product
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
