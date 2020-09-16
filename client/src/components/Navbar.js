import React from "react";
import "../style/navbar.css";
import * as queryString from "query-string";

const Navbar = (props) => {
  const parsed = queryString.parse(props.location);
  console.log(parsed);

  return (
    <nav id="navbar">
      <img id="logo" src={require("../assets/logo.png")} alt="fitbit logo" />
      <h4 id="title">Fitbit Activity Tracker</h4>

      {parsed && (
        <a href="http://localhost:3000/" className="signout">
          <h4>Sign Out</h4>
        </a>
      )}
    </nav>
  );
};

export default Navbar;
