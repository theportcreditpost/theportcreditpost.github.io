import React, { useState, useEffect } from "react";
import logo from "./img/logo.png";
import title from "./img/title.png";
import "./Header.css";

function Header() {
  const texts = [
    "APRIL NEWSLETTER OUT NOW!",
    "CHECK INSTA TO SUBMIT A MASCOT IDEA!",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 10 / texts.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <>
      <div className="img-container">
        <img src={logo} alt="Lighthouse Logo" id="logo" />
        <img src={title} alt="The Port Credit Post" id="title" />
      </div>
      <div className="text-container">
        {texts.map((text, index) => (
          <p
            key={index}
            className="text"
            style={{ "--delay": `${index * delay}s` }}
          >
            <span>{text}</span>
          </p>
        ))}
      </div>
    </>
  );
}

export default Header;
