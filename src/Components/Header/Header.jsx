import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <>
      <header className="header">
        <div className={`nav ${navActive ? "active" : ""}`}>
          <div>
            <a href="#home" className="navLink">
              HOME
            </a>
          </div>

          <div>
            <a href="#about" className="navLink">
              ABOUT
            </a>
          </div>

          <div>
            <a href="#work" className="navLink">
              WORK
            </a>
          </div>

          <div>
            <a href="#contact" className="navLink">
              CONTACT
            </a>
          </div>
        </div>
        <div
          className={`hamburger-icon ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
