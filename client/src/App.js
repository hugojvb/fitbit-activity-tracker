import React, { Fragment, Component } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Grid from "./components/Grid";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/signup" />
            </Route>
            <Route exact path="/signup" render={(props) => <Signup />} />
            <Route exact path="/grid" component={Grid} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
