// App.js

import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Home />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
