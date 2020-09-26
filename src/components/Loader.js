import React from "react";
import logo from "../assets/logo.png";
import "../style/loader.css";

const Loader = () => {
  return (
    <div className="loading-container">
      <img className="loading" src={logo} alt="loading" />
    </div>
  );
};

export default Loader;
