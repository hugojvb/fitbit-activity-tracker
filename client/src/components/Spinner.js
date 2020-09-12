import React from "react";
import "../assets/logo.png";

function Spinner() {
  return (
    <div className="loading-container">
      <img
        className="loading"
        src={require("../assets/logo.png")}
        alt="loading"
      />
    </div>
  );
}

export default Spinner;
