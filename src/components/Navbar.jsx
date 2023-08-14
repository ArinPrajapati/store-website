import React from "react";
import { useState } from "react";
import { tabs } from "../constant/constantData";

const Navbar = () => {
    const [hide, setHide] = useState(false)
  return (
    <nav className="nav flex flex-col justify-between pt-5 px-4">
      <section className=" navPartOne flex justify-between flex-row  p-3 items-cente">
        <img src="/logo.svg" className="logo" alt="" />
        <form action="" className="online border searchBar">
          <input type="text" className="input " placeholder="Search.." />
          <button type="submit" className="icon border-l-2 ">
            <img src="/search.svg" alt="" />
          </button>
        </form>
      </section>
      <section className="navPartTwo">
        <ul className="flex flex-row     text-[1.1rem] items-center">
         {
            tabs.map((tab)=>{
                return (
                    <li className=" p-4 tabname" ><a href={tab.url}>{tab.name}</a></li>
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
      <section className={`navPartFour ${hide ? 'max-h-[40rem] max-w-[50%]' : 'max-h-[0rem] w-0'}`}>
        <ul className={`flex flex-col justify-between sm:hidden  items-start ${hide ? '' : 'text-[0rem]'}`} >
        {
            tabs.map((tab)=>{
                return (
                    <li className=" text-black p-4 tabname" ><a href={tab.url}>{tab.name}</a></li>
                )
            })
         }
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
