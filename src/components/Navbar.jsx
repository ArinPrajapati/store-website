import React from "react";
import { useState } from "react";
import { tabs } from "../constant/TabNames";

const Navbar = () => {
    const [hide, setHide] = useState(false)
  return (
    <nav className="nav bg-slate-300">
      <section className=" navPartOne flex justify-between flex-row  p-3 items-cente">
        <img src="/logo.svg" className="logo" alt="" />
        <form action="" className="online border searchBar">
          <input type="text" className="input " placeholder="search.." />
          <button type="submit" className="icon border-l-2 ">
            <img src="/search.svg" alt="" />
          </button>
        </form>
      </section>
      <section className="navPartTwo">
        <ul className="flex flex-row justify-between p-3 items-center">
         {
            tabs.map((tab)=>{
                return (
                    <li><a href={tab.url}>{tab.name}</a></li>
                )
            })
         }
        
        </ul>
      </section>
      <section className="hidden navPartThree" onClick={()=>{setHide(!hide)}}>
        <div className="border-2 w-10 border-black"></div>
        <div className="border-2 w-10 border-black"></div>
        <div className="border-2 w-10 border-black"></div>
      </section>
      <section className={`navPartFour ${hide ? 'h-[40rem] w-[50%]' : 'h-[0rem] w-0'}`}>
        <ul className={`flex flex-col justify-between sm:hidden  items-start ${hide ? '' : 'text-[0rem]'}`} >
          <li>
            <a href="#">Home appliances</a>
          </li>
          <li>
            <a href="#">Audio & Video</a>
          </li>
          <li>
            <a href="#">Refrigerator</a>
          </li>
          <li>
            <a href="#">New arrivals</a>
          </li>
          <li>
            <a href="#">Today's Deal</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
          <li>
            <a href="#">
              <img className="icon" src="/cart.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
