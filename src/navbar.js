import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-item">
      <Link to="/">
      <img className="logo-img" src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" alt="chromeImg"></img>
      </Link>
      <h2>chrome</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>The Browser by Google</li>
          <li>Features <i class="bi bi-chevron-down"></i></li>
          <li>Support <i class="bi bi-chevron-down"></i></li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
