import React from "react";
import logo from "./img/logo.png";
import title from "./img/title.png";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="img-container">
        <img src={logo} alt="Lighthouse Logo" id="logo" />
        <img src={title} alt="The Port Credit Post" id="title" />
      </div>
      <p className="text">
        <span> JANUARY NEWSLETTER OUT NOW!</span>
      </p>
      <p className="text text2">
        <span> SEE ARTICLES AND IMAGES BELOW!</span>
      </p>
    </>
  );
}

export default Header;
