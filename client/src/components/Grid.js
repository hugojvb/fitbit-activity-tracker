import React, { useContext, useEffect, Fragment } from "react";
import Context from "../context/context";
import "../style/grid.css";
import Loader from "./Loader";
import { date } from "../util/date";
import axios from "axios";
import * as queryString from "query-string";
import GoalsModal from "./GoalsModal";
import CaloriesOutModal from "./CaloriesOutModal";
import CaloriesBMRModal from "./CaloriesBMRModal";
import StepsModal from "./StepsModal";
import BMIModal from "./BMIModal";
import DistanceModal from "./DistanceModal";
import CalorieIntakeModal from "./CalorieIntakeModal";
import WeightModal from "./WeightModal";
import BodyFatModal from "./BodyFatModal";
import ActivityModal from "./ActivityModal";
import HeartRateModal from "./HeartRateModal";
import SleepModal from "./SleepModal";

const Grid = (props) => {
  const context = useContext(Context);
  const {
    login,
    loading,
    stopLoading,
    activity,
    bodyFat,
    bodyWeight,
    sleep,
    heartRate,
    food,
    getActivityState,
    getBodyFatState,
    getBodyWeightState,
    getSleepState,
    getHeartRateState,
    getFoodState,
    openGoalsModal,
    openCaloriesOutModal,
    openCaloriesBMRModal,
    openStepsModal,
    openBMIModal,
    openDistanceModal,
    openCalorieIntakeModal,
    openWeightModal,
    openBodyFatModal,
    openActivityModal,
    openHeartRateModal,
    openSleepModal,
  } = context;
  const parsed = queryString.parse(props.location.hash);
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

        const resSleep = await axios.get(
          `https://api.fitbit.com/1.2/user/${user_id}/sleep/date/${date}.json`,
          {
            headers: {
              Authorization: `${token_type} ${access_token}`,
            },
          }
        );

        const resHeartRate = await axios.get(
          `https://api.fitbit.com/1/user/${user_id}/activities/heart/date/${date}/1w.json`,
          {
            headers: {
              Authorization: `${token_type} ${access_token}`,
            },
          }
        );

        const resFood = await axios.get(
          `https://api.fitbit.com/1/user/${user_id}/foods/log/date/${date}.json`,
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
          getSleepState(await resSleep.data);
          getHeartRateState(await resHeartRate.data);
          getFoodState(await resFood.data);
        }
      } catch (err) {
        console.log("Something went wrong. " + err);
      } finally {
        stopLoading();
      }
    };
    login();
    getData();
    return () => {
      shouldFetch = false;
    };
  }, []);

  const goalsCompleted = (goals) => {
    let count = 0;
    if (activity.summary.veryActiveMinutes >= goals.activeMinutes) count++;
    if (activity.summary.steps >= goals.steps) count++;
    if (activity.summary.caloriesOut >= goals.caloriesOut) count++;
    if (
      activity.summary.distances.find((c) => c.activity === "total")[
        "distance"
      ] >= goals.distance
    )
      count++;
    if (activity.summary.floors >= goals.floors) count++;
    return count;
  };

  console.log(activity.summary);

  return loading === false ? (
    <Fragment>
      <div className="grid-container">
        <div className="bg1" onClick={openGoalsModal}>
          <GoalsModal />
          <h2>
            {goalsCompleted(activity.goals)} /{" "}
            {scope.includes("activity") && Object.keys(activity.goals).length}
          </h2>
          <p>Goals for Today</p>
        </div>
        <div className="bg1" onClick={openCaloriesOutModal}>
          <CaloriesOutModal />
          <h2>{scope.includes("activity") && activity.summary.caloriesOut}</h2>
          <p>Calories Out</p>
        </div>
        <div className="bg2" onClick={openCaloriesBMRModal}>
          <CaloriesBMRModal />
          <h2>{scope.includes("activity") && activity.summary.caloriesBMR}</h2>
          <p>BMR</p>
        </div>
        <div className="bg1" onClick={openStepsModal}>
          <StepsModal />
          <i className="fas fa-shoe-prints fa-2x" />
          <p>Steps: {scope.includes("activity") && activity.summary.steps}</p>
        </div>
        <div className="bg1" onClick={openBMIModal}>
          <BMIModal />
          <i className="fas fa-child fa-2x" />
          <p>
            BMI:{" "}
            {scope.includes("weight") &&
              bodyWeight.weight[bodyWeight.weight.length - 1]["bmi"]}
          </p>
        </div>
        <div className="bg2" onClick={openDistanceModal}>
          <DistanceModal />
          <i className="fas fa-running fa-2x" />
          <h4>
            Total Distance Today:{" "}
            {scope.includes("activity") &&
              activity.summary.distances.find((c) => c.activity === "total")[
                "distance"
              ]}{" "}
            Km
          </h4>
        </div>
        <div className="bg1" onClick={openCalorieIntakeModal}>
          <CalorieIntakeModal />
          <i className="fas fa-utensils fa-2x" />
          <p>
            Calorie Intake:{" "}
            {scope.includes("nutrition") && food.summary.calories} Kcal
          </p>
        </div>
        <div className="bg2" onClick={openWeightModal}>
          <WeightModal />
          <h2>
            {scope.includes("weight") &&
              bodyWeight.weight[bodyWeight.weight.length - 1]["weight"]}
          </h2>
          <p>(Kg)</p>
        </div>
        <div className="bg2" onClick={openBodyFatModal}>
          <BodyFatModal />
          <h2>
            {scope.includes("weight") &&
              bodyFat.fat[bodyFat.fat.length - 1]["fat"]}
          </h2>
          <p>(Body Fat %)</p>
        </div>
        <div className="bg1" onClick={openActivityModal}>
          <ActivityModal />
          <i className="fas fa-history fa-2x" />
          <p>Activity</p>
        </div>
        <div className="bg2" onClick={openHeartRateModal}>
          <HeartRateModal />
          <i className="fas fa-heartbeat fa-2x" />
          <p>Heart Rate</p>
        </div>
        <div className="bg2" onClick={openSleepModal}>
          <SleepModal />
          <i className="fas fa-bed fa-2x" />
          <p>
            {scope.includes("sleep") && sleep.summary.totalMinutesAsleep}{" "}
            Minutes of Sleep
          </p>
        </div>
      </div>
    </Fragment>
  ) : (
    <Loader />
  );
};

export default Grid;
