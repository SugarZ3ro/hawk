import React from "react";
import "./Navbar.css";

function navbar() {
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">HOME</div>
      <div className="navbar__item">About Us</div>
      <div className="navbar__item">Contact</div>
      <div className="navbar__item">Help</div>
    </header>
  );
}

export default navbar;
