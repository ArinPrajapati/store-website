import React from "react";
import { productCatList } from "../../constant/constantData";

const Feature = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <h1 className="text-3xl sm:text-5xl font-Inter drop-shadow-xl gray_gradient mb-5 h-[5rem]">
        Shop by Category
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 mt-8 mx-2 sm:mx-0 shadow-2xl p-6 bg-[#d4d3d3] rounded-lg ">
        {productCatList.map((category, index) => (
          <a
            key={index}
            href={category.url}
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Recommended for security reasons
            className="border p-4 sm:p-5 rounded-lg hover:scale-105 transition-all bg-white hover:bg-gray-100 duration-300 shadow-lg"
          >
            <img
              src={category.img}
              alt={category.name}
              className="w-full h-24 sm:h-[80%] object-contain mx-auto"
            />
            <h3 className="text-center text-base sm:text-lg font-Roboto mt-2">
              {category.name}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Feature;
