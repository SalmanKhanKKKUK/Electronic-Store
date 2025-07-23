import React from "react";
import ProductGrid from "../Components/ProductGrid";
import Footer from "../Components/Footer";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../Features/products/ProductSlice";
const categories = [
  "All",
  "Graphic Cards",
  "Laptops",
  "Monitors",
  "Power Supply",
];
const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div className="bg"></div>
        <div className="container mx-auto my-10 px-4">
          <div className="flex gap-4">
            {categories.map((cat) => {
              return (
                <button
                  className="bg-gray-400 py-2 px-4 rounded-md text-black active:scale-105
             hover:bg-zinc-400 transition-all ease-in cursor-pointer"
                  key={cat}
                  onClick={() => dispatch(setSelectedCategory(cat))}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <ProductGrid />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
