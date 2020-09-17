import React, { useContext, useState, useEffect } from "react";
import "../style/grid.css";
import * as queryString from "query-string";
import Spinner from "./Spinner";
import Context from "../context/context";

const Grid = (props) => {
  const [loading, setLoading] = useState({ loading: false });
  const context = useContext(Context);

  async function getData() {
    const parsed = queryString.parse(props.location.hash);
    console.log(parsed);
    const res = await fetch(
      `https://api.fitbit.com/1/user/${parsed.user_id}/activities/date/${context.date}.json`,
      {
        headers: {
          Authorization: `${parsed.token_type} ${parsed.access_token}`,
        },
      }
    );
    const data = await res.json();
    setLoading();
    console.log(data);
  }

  useEffect(() => {
    getData();
  });

  return loading === false ? (
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
};

export default Grid;
