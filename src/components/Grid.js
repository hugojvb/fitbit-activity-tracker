import React, { useContext, useEffect, Fragment, lazy, Suspense } from "react";
import Context from "../context/context";
import "../style/grid.css";
import Loader from "./Loader";
import { date, previousWeek } from "../util/date";
import axios from "axios";
import * as queryString from "query-string";

// Lazy Loads
const GoalsModal = lazy(() => import("./GoalsModal"));
const CaloriesOutModal = lazy(() => import("./CaloriesOutModal"));
const CaloriesBMRModal = lazy(() => import("./CaloriesBMRModal"));
const StepsModal = lazy(() => import("./StepsModal"));
const BMIModal = lazy(() => import("./BMIModal"));
const DistanceModal = lazy(() => import("./DistanceModal"));
const CalorieIntakeModal = lazy(() => import("./CalorieIntakeModal"));
const WeightModal = lazy(() => import("./WeightModal"));
const BodyFatModal = lazy(() => import("./BodyFatModal"));
const ActivityModal = lazy(() => import("./ActivityModal"));
const HeartRateModal = lazy(() => import("./HeartRateModal"));
const SleepModal = lazy(() => import("./SleepModal"));

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
          `https://api.fitbit.com/1/user/${user_id}/body/log/fat/date/${date}/1w.json`,
          {
            headers: {
              Authorization: `${token_type} ${access_token}`,
            },
          }
        );

        const resBodyWeight = await axios.get(
          `https://api.fitbit.com/1/user/${user_id}/body/log/weight/date/${date}/1w.json`,
          {
            headers: {
              Authorization: `${token_type} ${access_token}`,
            },
          }
        );

        const resSleep = await axios.get(
          `https://api.fitbit.com/1.2/user/${user_id}/sleep/date/${previousWeek}/${date}.json`,
          {
            headers: {
              Authorization: `${token_type} ${access_token}`,
            },
          }
        );

        const resHeartRate = await axios.get(
          `https://api.fitbit.com/1/user/${user_id}/activities/heart/date/${date}/1d.json`,
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

  return loading === false ? (
    <Fragment>
      <div className="grid-container">
        <div className="bg1" onClick={openGoalsModal}>
          <Suspense falback={<Loader />}>
            <GoalsModal />
          </Suspense>
          <h2>
            {goalsCompleted(activity.goals)} /{" "}
            {scope.includes("activity") && Object.keys(activity.goals).length}
          </h2>
          <p>Goals for Today</p>
        </div>
        <div className="bg1" onClick={openCaloriesOutModal}>
          <Suspense falback={<Loader />}>
            <CaloriesOutModal />
          </Suspense>
          <h2>{scope.includes("activity") && activity.summary.caloriesOut}</h2>
          <p>Calories Out</p>
        </div>
        <div className="bg2" onClick={openCaloriesBMRModal}>
          <Suspense falback={<Loader />}>
            <CaloriesBMRModal />
          </Suspense>
          <h2>{scope.includes("activity") && activity.summary.caloriesBMR}</h2>
          <p>BMR</p>
        </div>
        <div className="bg1" onClick={openStepsModal}>
          <Suspense falback={<Loader />}>
            <StepsModal />
          </Suspense>
          <i className="fas fa-shoe-prints fa-2x" />
          <p>Steps: {scope.includes("activity") && activity.summary.steps}</p>
        </div>
        <div className="bg1" onClick={openBMIModal}>
          <Suspense falback={<Loader />}>
            <BMIModal />
          </Suspense>
          <i className="fas fa-child fa-2x" />
          <p>
            BMI:{" "}
            {scope.includes("weight") &&
              bodyWeight.weight[bodyWeight.weight.length - 1]["bmi"]}
          </p>
        </div>
        <div className="bg2" onClick={openDistanceModal}>
          <Suspense falback={<Loader />}>
            <DistanceModal />
          </Suspense>
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
          <Suspense falback={<Loader />}>
            <CalorieIntakeModal />
          </Suspense>
          <i className="fas fa-utensils fa-2x" />
          <p>
            Calorie Intake:{" "}
            {scope.includes("nutrition") && food.summary.calories} Kcal
          </p>
        </div>
        <div className="bg2" onClick={openWeightModal}>
          <Suspense falback={<Loader />}>
            <WeightModal />
          </Suspense>
          <h2>
            {scope.includes("weight") &&
              bodyWeight.weight[bodyWeight.weight.length - 1]["weight"]}
          </h2>
          <p>(Kg)</p>
        </div>
        <div className="bg2" onClick={openBodyFatModal}>
          <Suspense falback={<Loader />}>
            <BodyFatModal />
          </Suspense>
          <h2>
            {scope.includes("weight") &&
              bodyFat.fat[bodyFat.fat.length - 1]["fat"]}
          </h2>
          <p>(Body Fat %)</p>
        </div>
        <div className="bg1" onClick={openActivityModal}>
          <Suspense falback={<Loader />}>
            <ActivityModal />
          </Suspense>
          <i className="fas fa-history fa-2x" />
          <p>Activity</p>
        </div>
        <div className="bg2" onClick={openHeartRateModal}>
          <Suspense falback={<Loader />}>
            <HeartRateModal />
          </Suspense>
          <i className="fas fa-heartbeat fa-2x" />
          <p>Heart Rate</p>
        </div>
        <div className="bg2" onClick={openSleepModal}>
          <Suspense falback={<Loader />}>
            <SleepModal />
          </Suspense>
          <i className="fas fa-bed fa-2x" />
          <p>{scope.includes("sleep") && sleep.sleep.length} Sleep Times</p>
        </div>
      </div>
    </Fragment>
  ) : (
      <Loader />
    );
};

export default Grid;
