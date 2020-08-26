import React from "react";
import "./App.css";
import Grid from "./components/Grid";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid />
    </div>
  );
}

export default App;
