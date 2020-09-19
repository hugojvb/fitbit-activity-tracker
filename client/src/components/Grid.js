import React, { useContext, useEffect } from "react";
import "../style/grid.css";
import * as queryString from "query-string";
import Loader from "./Loader";
import Context from "../context/context";
import { date } from "../util/date";

const Grid = (props) => {
  const context = useContext(Context);
  const { login, loading, activity, stopLoading, getActivity } = context;

  useEffect(() => {
    let shouldFetch = true;
    const getActivityData = async () => {
      try {
        const parsed = queryString.parse(props.location.hash);
        const { user_id, token_type, access_token } = parsed;

        const resActivity = await fetch(
          `https://api.fitbit.com/1/user/${user_id}/activities/date/${date}.json`,
          {
            headers: {
              Authorization: `${token_type} ${access_token}`,
            },
          }
        );

        if (shouldFetch) {
          getActivity(await resActivity.json());
        }
      } catch (err) {
        console.log("Something went wrong. Error is as follows " + err);
      } finally {
        stopLoading();
      }
    };
    getActivityData();
    login();
    return () => {
      shouldFetch = false;
    };
  }, []);

  console.log(activity);

  return loading === false ? (
    <div className="grid-container">
      <div className="bg1">
        <h2>{Object.keys(activity.goals).length}</h2>
        <p>Goals</p>
      </div>
      <div className="bg1">
        <h2>{activity.summary.caloriesOut}</h2>
        <p>Calories Out</p>
      </div>
      <div className="bg2">
        <h2>{activity.summary.caloriesBMR}</h2>
        <p>Base Metabolic Rate</p>
      </div>
      <div className="bg1">
        <i className="fas fa-shoe-prints fa-2x" />
        <p>{activity.summary.steps} Steps</p>
      </div>
      <div className="bg1">
        <i className="fas fa-mountain fa-2x" />
        <p>Elevation: {activity.summary.elevation}</p>
      </div>
      <div className="bg2">
        <i className="fas fa-running fa-2x" />
        <h4>Total Distance: {activity.summary.distances[1]["distance"]} Km</h4>
      </div>
      <div className="bg1">
        <i className="fas fa-utensils fa-2x" />
        <p>Calorie Intake</p>
      </div>
      <div className="bg2">
        <h2>75</h2>
        <p>(Kg)</p>
      </div>
      <div className="bg2">
        <h2>25</h2>
        <p>(Body Fat %)</p>
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
    <Loader />
  );
};

export default Grid;
