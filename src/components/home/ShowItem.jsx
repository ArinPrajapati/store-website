import React, { useState, useEffect } from "react";
import { data } from "../../data/store";

const ShowItem = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  useEffect(() => {
    const getRandomProducts = () => {
      const shuffledProducts = data.sort(() => 0.5 - Math.random());
      const selectedProducts = shuffledProducts.slice(0, 9);
      setRandomProducts(selectedProducts);
    };
    getRandomProducts();
  }, []);

  return (
    <div className="bg-white min-h-screen p-5 sm:p-10 text-center mt-5 sm:mt-[5rem]">
      <h1 className="text-2xl sm:text-4xl font-Inter mb-4 sm:mb-8 gray_gradient">
        Products Selected For You
      </h1>
      <div className="max-w-7xl mx-auto sm:px-4 lg:px-8 bg-[#d4d3d3] mt-4 sm:mt-6 p-10 sm:p-20 shadow-2xl rounded-[10px]">
        <div className="text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {randomProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] hover:scale-105 transition-all shadow-lg p-4 sm:p-10"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 sm:h-40 object-contain mb-2"
              />
              <h3 className="text-md sm:text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-2">{product.description}</p>
              <p className="text-green-500 font-semibold text-sm sm:text-base">{product.price}</p>
              <button className="bg-gray-500 text-white rounded-md px-2 sm:px-4 py-1 sm:py-2 mt-2 w-full hover:bg-gray-600 text-xs sm:text-sm">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
