import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const translations = {
    English: "Hello, I am",
    Nepali: "नमस्ते, म",
  };

  const names = {
    English: "Abhijit Guragain",
    Nepali: "अभिजित गुरागाईं",
  };

  const languages = Object.keys(translations);
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguageIndex(
        (prevIndex) => (prevIndex + 1) % languages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div id="home" className="home">
        <h1>
          {translations[languages[currentLanguageIndex]]}
          <br />
          <span className="myName">
            {names[languages[currentLanguageIndex]]}
          </span>
        </h1>
      </div>
    </>
  );
};

export default Home;
