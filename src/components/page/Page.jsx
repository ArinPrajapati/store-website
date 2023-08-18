import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "/src/data/store.jsx";

const Page = () => {
  const pageD = useParams();
  const [name, setName] = useState('');
  const sccs = pageD.tabId
  switch (sccs) {
    case 'homeAppliances': setName('Home Appliances')
      break;
    case 'clothing': setName('Clothing')
      break;
    case 'electronics': setName('Electronics')
      break;
    case 'beautyCare': setName('Beauty Care')
      break;
    case 'sportsOutdoors': setName('Sports Outdoors')
      break;
    case 'books': setName('Books')
      break;
    default:'error' 
      break;
  }
  const clothingItems = data.filter((item) => item.tag === pageD.tabId);
  return (
    <div className="">
      <h1 className="text-[5rem] font-Inter m-auto w-[59rem] text-center  mb-[4rem] mt-[4rem] white_gradient ">
      {name}  
      </h1>
      <div className=" grid grid-cols-3 grid-rows-2 w-[90%] gap-3 shadow-inner   m-auto border p-5 py-10 mb-10 rounded-md bg-[#d4d3d3] ">
        {clothingItems.map((item, index) => (
          <div
            key={index}
            className="border shadow-md rounded-xl p-10 w-[20rem] h-[30rem] m-auto bg-white hover:scale-105 transition-all my-5"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[70%] mb-5"
            />
            <div>
              <h2 className="text-lg text-black font-semibold mb-1 ">
                {item.name}
              </h2>
              <p className="text-gray-700 mb-2">Price: {item.price}</p>
            </div>
            <button className="w-full border bg-[#d4d3d3] h-8 my-3 rounded-lg text-[1.3rem] active:scale-90">
              Add to Card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
