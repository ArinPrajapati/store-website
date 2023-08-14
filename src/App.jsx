import React from "react";
import "./App.css";
import { Navbar, Hero, Feature, ShowItem } from "./components";

const App = () => {
  return (
    <div className="max-w-[100rem] m-auto app">
      <Navbar />

      <Hero />
      <ShowItem />
      {/* <Feature /> */}
     
    </div>
  );
};

export default App;
