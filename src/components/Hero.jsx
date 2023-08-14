import React from "react";
import { heroStyle } from "../constant/constantData";

const Hero = () => {
  return (
    <div className="hero relative max-h-[100dvh]" style={heroStyle}>
      <div className="box ">
        <div className="online">
          <img className="icon" src="/tv.svg" alt="tvsvg" />
          Logo
        </div>
        <div className="boxtitel text-[3rem] ] font-semibold ">
          <h1 className="w-[30rem] leading-[3rem] mb-7">Your Ultimate Destination for Quality Product</h1>
          <h2 className="text-[2rem] leading-[3rem] ">
          Discover a Wide Range of Products Across Various Categories, All in One Place
          </h2>
        </div>
          <button className="border-2 w-[14rem] h-[4rem] mt-5 rounded-[4px] text-white hover:bg-slate-200 hover:border-black  hover:text-black transition ">Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
