import React, { Fragment, Component } from "react";
import "./App.css";
import Grid from "./components/Grid";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/signin" />
            </Route>
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/grid" component={Grid} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
