import React from "react";
import "./App.css";
import { Navbar, Hero, Feature, ShowItem , NewsLatter ,Footer} from "./components";


const App = () => {
  return (
    <div className="max-w-[100rem] m-auto app sm:m-auto">
      <Navbar />
      <Hero />
      <Feature />
      <ShowItem />
      <NewsLatter />
      <Footer />
    </div>
  );
};

export default App;
