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
import Spinner from "./components/Spinner";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    return this.state.loading === false ? (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/signup" />
            </Route>
            <Route
              exact
              path="/signup"
              render={(props) => <Signup loading={this.state.loading} />}
            />
            <Route exact path="/grid" component={Grid} />
          </Switch>
        </Fragment>
      </Router>
    ) : (
      <Spinner />
    );
  }
}

export default App;
