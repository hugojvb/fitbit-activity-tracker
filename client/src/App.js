import React, { Fragment } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Grid from "./components/Grid";
import Start from "./components/Start";
import Navbar from "./components/Navbar";
import State from "./context/state";

const App = () => {
  return (
    <State>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/start" />
            </Route>
            <Route exact path="/start" component={Start} />
            <Route exact path="/grid" component={Grid} />
          </Switch>
        </Fragment>
      </Router>
    </State>
  );
};

export default App;
