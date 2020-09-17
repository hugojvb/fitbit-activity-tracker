import React, { useContext } from "react";
import "../style/navbar.css";
import logo from "../assets/logo.png";
import Context from "../context/context";

const Navbar = (props) => {
  const context = useContext(Context);

  return (
    <nav id="navbar">
      <img id="logo" src={logo} alt="fitbit logo" />
      <h4 id="title">Fitbit Activity Tracker</h4>
      {context.logged_in && (
        <a href="http://localhost:3000/" className="signout">
          <h4>Log Out</h4>
        </a>
      )}
    </nav>
  );
};

export default Navbar;
