import React from "react";
import { useState } from "react";
import { tabs } from "../../constant/constantData";
import { useSnapshot } from "valtio";
import state from "/src/constant/PageState";

const Navbar = () => {
  const [hide, setHide] = useState(false);
  return (
    <nav className={`nav flex flex-col justify-between pt-5 px-4 `}>
      <section className=" navPartOne flex justify-between flex-row  p-3 items-cente">
        <a href="/">
          <img src="/logo.svg" className="logo" alt="" href="" />
        </a>
        <form className="">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div className="relative flex justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-black absolute right-2.5 bottom-2.5 bg-slate-400 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </section>
      <section className="navPartTwo">
        <ul className="flex flex-row text-[1.1rem] items-center">
          {tabs.map((tab, index) => {
            return (
              <li key={index} className=" p-4 tabname">
                <a href={tab.url}>{tab.name}</a>
              </li>
            );
          })}
        </ul>
      </section>
      <section
        className="hidden navPartThree"
        onClick={() => {
          setHide(!hide);
        }}
      >
        <div className="border-2 w-10 border-black"></div>
        <div className="border-2 w-10 border-black"></div>
        <div className="border-2 w-10 border-black"></div>
      </section>
      <section
        className={`navPartFour ${
          hide ? "max-h-[40rem] max-w-[50%]" : "max-h-[0rem] w-0"
        }`}
      >
        <ul
          className={`flex flex-col justify-between sm:hidden  items-start ${
            hide ? "" : "text-[0rem]"
          }`}
        >
          {tabs.map((tab, index) => {
            return (
              <li key={index} className=" text-black p-4 tabname">
                <a href={tab.url}>{tab.name}</a>
              </li>
            );
          })}
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
