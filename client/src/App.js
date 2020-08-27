import React, { Fragment } from "react";
import "./App.css";
import Grid from "./components/Grid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Grid} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
