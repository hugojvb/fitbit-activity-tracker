import React from "react";
import "../style/navbar.css";

const Navbar = (props) => {
  return (
    <nav id="navbar">
      <img id="logo" src={require("../assets/logo.png")} alt="fitbit logo" />
      <h4 id="title">Fitbit Activity Tracker</h4>

      <a href="http://localhost:3000/" className="signout">
        Sign Out
      </a>
    </nav>
  );
};

export default Navbar;
