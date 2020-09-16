import React from "react";
import logo from "../assets/logo.png";
import "../style/spinner.css";

function Spinner() {
  return (
    <div className="loading-container">
      <img className="loading" src={logo} alt="loading" />
    </div>
  );
}

export default Spinner;
