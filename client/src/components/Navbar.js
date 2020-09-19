import React, { useContext } from "react";
import "../style/navbar.css";
import logo from "../assets/logo.png";
import Context from "../context/context";

const Navbar = (props) => {
  const context = useContext(Context);
  console.log(context.activity.summary);

  return (
    <nav id="navbar">
      <img id="logo" src={logo} alt="fitbit logo" />
      <h4 id="title">Fitbit Activity Tracker</h4>
      <ul>
        <li>
          {context.activity.summary && (
            <h6 className="active">
              Activity Score: {context.activity.summary.activeScore}
            </h6>
          )}
        </li>
        <li>
          {context.logged_in && (
            <a href="http://localhost:3000/" className="signout">
              <h4>Log Out</h4>
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
