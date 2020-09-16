import React, { Component } from "react";
import "../style/grid.css";
import * as queryString from "query-string";
import Spinner from "./Spinner";

class Grid extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: true,
      date: this.formatDate(new Date()),
    };
    this.parsed = queryString.parse(props.location.hash);
    console.log(this.parsed);
  }

  async componentDidMount() {
    const res = await fetch(
      `https://api.fitbit.com/1/user/${this.parsed.user_id}/activities/date/${this.state.date}.json`,
      {
        headers: {
          Authorization: `${this.parsed.token_type} ${this.parsed.access_token}`,
        },
      }
    );
    const data = res.json();
    console.log(data);
    this.setState({ loading: false });
  }

  formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

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
