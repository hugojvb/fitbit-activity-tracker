import React from "react";
import logo from "../assets/logo.png";
import "../style/spinner.css";

const Spinner = () => {
  return (
    <div className="loading-container">
      <img className="loading" src={logo} alt="loading" />
    </div>
  );
};

export default Spinner;
