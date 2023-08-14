import React from "react";
import { data } from "../data/store";
import { star } from "../constant/constantData";

const ShowItem = () => {
  console.log(data.zero);
  return (
    <div className="max-w-screen-xl mx-auto p-10 w-[100%] bg-slate-50">
      <div className="flex flex-wrap flex-row py-10 w-[100%] border justify-center  shadow-lg">
        {data.map((product) => (
          <div key={product.id} className="border p-4  mr-16  mb-10 rounded-lg shadow-md w-[20rem]">
            <div className="relative">
              <img
                src={product.image}
                alt={product.altImg}
                className="w-full h-auto"
              />
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <div className=" bottom-0 w-full flex items-center justify-between p-2 ">
                {star[product.rating]}
                <div>{product.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowItem;
