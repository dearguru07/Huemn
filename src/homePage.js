import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <Link to="/"><img
        className="center-img"
        src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
        alt="Chrome Img"
      ></img></Link>
      <h1>The browser</h1>
      <h1>built to be yours</h1>
      <div className="flex-btn">
        <ul>
          <button className="btn">Updates</button>
          <button className="btn">Yours</button>
          <button className="btn">Safe</button>
          <Link to="/fast"><button className="btn">Fast</button></Link>
          <button className="btn">By Google</button>
        </ul>
        <p>
          Need the Chrome installer? <span>Download here.</span>
        </p>
      </div>
    </div>
  );
};
export default HomePage;
