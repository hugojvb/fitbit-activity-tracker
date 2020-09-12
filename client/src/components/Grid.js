import React, { Component } from "react";
import "../style/grid.css";
import * as queryString from "query-string";
import Spinner from "./Spinner";

class Grid extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: true,
    };
    this.parsed = queryString.parse(props.location.hash);
    // console.log(this.parsed);
  }

  async componentDidMount() {
    const data = await fetch("https://api.fitbit.com/1/user/-/profile.json", {
      headers: {
        Authorization: `${this.parsed.token_type} ${this.parsed.access_token}`,
      },
    });
    console.log(data);
    this.setState({ loading: false });
  }

  render() {
    return this.state.loading === false ? (
      <div className="grid-container">
        <div className="bg1">
          <h2>2/5</h2>
          <p>Goals</p>
        </div>
        <div className="bg1">
          <h2>265</h2>
          <p>Calories Out</p>
        </div>
        <div className="bg2">
          <i className="fas fa-chart-line fa-2x" />
          <p>BMR</p>
        </div>
        <div className="bg1">
          <i className="fas fa-shoe-prints fa-2x" />
          <p>Steps</p>
        </div>
        <div className="bg1">
          <i className="fas fa-mountain fa-2x" />
          <p>Elevation</p>
        </div>
        <div className="bg2">
          <i className="fas fa-running fa-2x" />
          <p>Distance</p>
        </div>
        <div className="bg1">
          <h2>25</h2>
          <p>(Body Fat %)</p>
        </div>
        <div className="bg2">
          <h2>75</h2>
          <p>(Kg)</p>
        </div>
        <div className="bg2">
          <i className="fas fa-utensils fa-2x" />
          <p>Calorie Intake</p>
        </div>
        <div className="bg1">
          <i className="fas fa-history fa-2x" />
          <p>Activity</p>
        </div>
        <div className="bg2">
          <i className="fas fa-heartbeat fa-2x" />
          <p>Heart Rate</p>
        </div>
        <div className="bg2">
          <i className="fas fa-bed fa-2x" />
          <p>Sleep</p>
        </div>
      </div>
    ) : (
      <Spinner />
    );
  }
}

export default Grid;
