import React, { useContext, useEffect } from "react";
import "../style/grid.css";
import Loader from "./Loader";
import Context from "../context/context";
import { date } from "../util/date";
import axios from "axios";
import * as queryString from "query-string";

const Grid = (props) => {
  const context = useContext(Context);
  const {
    login,
    loading,
    stopLoading,
    activity,
    bodyFat,
    bodyWeight,
    getActivityState,
    getBodyFatState,
    getBodyWeightState,
  } = context;
  const parsed = queryString.parse(props.location.hash);
  console.log(parsed);
  const { user_id, token_type, access_token, scope } = parsed;

  useEffect(() => {
    let shouldFetch = true;
    const getData = async () => {
      try {
        const resActivity = await axios.get(
          `https://api.fitbit.com/1/user/${user_id}/activities/date/${date}.json`,
          {
            headers: {
              Authorization: `${token_type} ${access_token}`,
            },
          }
        );

        const resBodyFat = await axios.get(
          `https://api.fitbit.com/1/user/${user_id}/body/log/fat/date/${date}/1m.json`,
          {
            headers: {
              Authorization: `${token_type} ${access_token}`,
            },
          }
        );

        const resBodyWeight = await axios.get(
          `https://api.fitbit.com/1/user/${user_id}/body/log/weight/date/${date}/1m.json`,
          {
            headers: {
              Authorization: `${token_type} ${access_token}`,
            },
          }
        );

        if (shouldFetch) {
          getActivityState(await resActivity.data);
          getBodyFatState(await resBodyFat.data);
          getBodyWeightState(await resBodyWeight.data);
        }
      } catch (err) {
        console.log("Something went wrong. Error: " + err);
      } finally {
        stopLoading();
      }
    };
    getData();
    login();
    return () => {
      shouldFetch = false;
    };
  }, []);

  console.log(activity);

  return loading === false ? (
    <div className="grid-container">
      <div className="bg1">
        <h2>
          {scope.includes("activity") && Object.keys(activity.goals).length}
        </h2>
        <p>Goals</p>
      </div>
      <div className="bg1">
        <h2>{scope.includes("activity") && activity.summary.caloriesOut}</h2>
        <p>Calories Out</p>
      </div>
      <div className="bg2">
        <h2>{scope.includes("activity") && activity.summary.caloriesBMR}</h2>
        <p>Base Metabolic Rate</p>
      </div>
      <div className="bg1">
        <i className="fas fa-shoe-prints fa-2x" />
        <p>{scope.includes("activity") && activity.summary.steps} Steps</p>
      </div>
      <div className="bg1">
        <i className="fas fa-mountain fa-2x" />
        <p>
          Elevation: {scope.includes("activity") && activity.summary.elevation}
        </p>
      </div>
      <div className="bg2">
        <i className="fas fa-running fa-2x" />
        <h4>
          Total Distance:{" "}
          {scope.includes("activity") &&
            activity.summary.distances[1]["distance"]}{" "}
          Km
        </h4>
      </div>
      <div className="bg1">
        <i className="fas fa-utensils fa-2x" />
        <p>Calorie Intake</p>
      </div>
      <div className="bg2">
        <h2>
          {scope.includes("weight") &&
            bodyWeight.weight[bodyWeight.weight.length - 1]["weight"]}
        </h2>
        <p>(Kg)</p>
      </div>
      <div className="bg2">
        <h2>
          {scope.includes("weight") &&
            bodyFat.fat[bodyFat.fat.length - 1]["fat"]}
        </h2>
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
