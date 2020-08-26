import React, { Component } from "react";
import "../style/grid.css";

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  render() {
    return (
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
    );
  }
}

export default Grid;
