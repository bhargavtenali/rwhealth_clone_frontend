import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function LandingPage(props) {
  return (
    <div className="bg-container">
      <video
        autoPlay
        loop
        muted
        className="videoTag"
        src="https://realworld.health/wp-content/uploads/2021/05/RWH-LAND-FIN-1.mp4"
      />
      <div className="app-container">
        <img
          src="https://realworld.health/wp-content/uploads/2021/05/RWH-LOGO-FINVWEB3.png"
          alt="logo-icon"
          className="logo-icon"
        />
        <h1 className="main-heading">
          For a new generation of
          <br />
          innovators
        </h1>
        <p className="text">
          We are at the heart of healthcare, data science and technology --
          providing advance data solutions to
          <br />
          improve human health.
        </p>
        <Link to="/login">
          <button className="button">HEALTH CARE</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
