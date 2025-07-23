import React from "react";
import { Link } from "react-router-dom";
const ProductCart = ({ product }) => {
  return (
    <>
      <Link to={`/product/${product.id}`}>
        <div className="shadow-lg rounded-md cursor-pointer">
          <img src={product.img}  className="py-4"/>
          <div className="bg-gray-50 p-4">
            <h2 className="text-lg font-semibold my-4 text-center">
              {product.title.substring(0, 25) + "..."}
            </h2>
            <p className="text-sm text-zinc-500 border-b-2 pb-2 w-200px">
              {product.des.substring(0, 70) + "..."}
            </p>
            <div className="flex justify-between mt-4 items-center">
              <p className="text-xl font-semibold">{product.price}</p>
              <p>View Detail</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCart;
