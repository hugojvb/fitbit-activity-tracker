import React from "react";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <i id="logo" className="fas fa-dumbbell fa-1x" />
      <h4 id="title">Workout Tracker</h4>
      <h5 className="signout">Sign Out</h5>
    </nav>
  );
};

export default Navbar;
