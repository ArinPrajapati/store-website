import React from "react";
import "./App.css";
import {
  Navbar,
  Hero,
  Feature,
  ShowItem,
  NewsLatter,
  Footer,
} from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomeApp,
  Electro,
  Clothing,
  Book,
  Bcare,
  Sport,
  Page,
} from "./components/page";

const App = () => {
  return (
    <div className="max-w-[100rem] m-auto app sm:m-auto relative">
      <Navbar className="overflow-hidden sticky top-[0]" />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Feature />
                <ShowItem />
                <NewsLatter />
              </div>
            }
          />
          <Route
            path="/home_appliances"
            element={
              <div>
                <HomeApp />
              </div>
            }
          />
          <Route
            path="/clothing"
            element={
              <div>
                <Clothing />
              </div>
            }
          />
          <Route
            path="/beauty_Care"
            element={
              <div>
                <Bcare />
              </div>
            }
          />
          <Route
            path="/Electronics"
            element={
              <div>
                <Electro />
              </div>
            }
          />
          <Route
            path="/Sport_outdoor"
            element={
              <div>
                <Sport />
              </div>
            }
          />
          <Route
            path="/Books"
            element={
              <div>
                <Book />
              </div>
            }
          />
           <Route path="/page/:tabId" element={<Page />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
