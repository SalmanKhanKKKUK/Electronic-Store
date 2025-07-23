import React from "react";
// import products from "../productContent";
import ProductCart from "./ProductCart";
import { useSelector } from "react-redux";
const ProductGrid = () => {
  const products = useSelector((state) => state.product.filteredItems);
  console.log(products);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-24">
        {products.map((product) => {
          return <ProductCart key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductGrid;
