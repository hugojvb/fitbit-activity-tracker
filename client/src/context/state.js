import React, { useReducer } from "react";
import Context from "./context";
import reducer from "./reducer";
import {
  LOGIN,
  LOGOUT,
  STOP_LOADING,
  GET_ACTIVITY,
  GET_BODYFAT,
  GET_BODYWEIGHT,
  GET_SLEEP,
  GET_HEARTRATE,
  GET_FOOD,
  OPEN_GOALS_MODAL,
  CLOSE_GOALS_MODAL,
  OPEN_CALORIESOUT_MODAL,
  CLOSE_CALORIESOUT_MODAL,
  OPEN_CALORIESBMR_MODAL,
  CLOSE_CALORIESBMR_MODAL,
  OPEN_STEPS_MODAL,
  CLOSE_STEPS_MODAL,
  OPEN_BMI_MODAL,
  CLOSE_BMI_MODAL,
  OPEN_DISTANCE_MODAL,
  CLOSE_DISTANCE_MODAL,
  OPEN_CALORIEINTAKE_MODAL,
  CLOSE_CALORIEINTAKE_MODAL,
  OPEN_WEIGHT_MODAL,
  CLOSE_WEIGHT_MODAL,
  OPEN_BODYFAT_MODAL,
  CLOSE_BODYFAT_MODAL,
  OPEN_ACTIVITY_MODAL,
  CLOSE_ACTIVITY_MODAL,
  OPEN_HEARTRATE_MODAL,
  CLOSE_HEARTRATE_MODAL,
  OPEN_SLEEP_MODAL,
  CLOSE_SLEEP_MODAL,
} from "./types";

const State = (props) => {
  const initialState = {
    logged_in: false,
    loading: true,
    activity: {},
    bodyFat: {},
    bodyWeight: {},
    heartRate: {},
    food: {},
    showGoalsModal: false,
    showCaloriesOutModal: false,
    showCaloriesBMRModal: false,
    showStepsModal: false,
    showBMIModal: false,
    showDistanceModal: false,
    showCalorieIntakeModal: false,
    showWeightModal: false,
    showBodyFatModal: false,
    showActivityModal: false,
    showHeartRateModal: false,
    showSleepModal: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // actions
  const login = () => {
    dispatch({ type: LOGIN });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  const stopLoading = () => {
    dispatch({ type: STOP_LOADING });
  };

  const getActivityState = (activity) => {
    dispatch({ type: GET_ACTIVITY, payload: activity });
  };

  const getBodyFatState = (bodyFat) => {
    dispatch({ type: GET_BODYFAT, payload: bodyFat });
  };

  const getBodyWeightState = (bodyWeight) => {
    dispatch({ type: GET_BODYWEIGHT, payload: bodyWeight });
  };

  const getSleepState = (sleep) => {
    dispatch({ type: GET_SLEEP, payload: sleep });
  };

  const getHeartRateState = (heartRate) => {
    dispatch({ type: GET_HEARTRATE, payload: heartRate });
  };

  const getFoodState = (food) => {
    dispatch({ type: GET_FOOD, payload: food });
  };

  const openGoalsModal = () => {
    dispatch({ type: OPEN_GOALS_MODAL });
  };

  const closeGoalsModal = () => {
    dispatch({ type: CLOSE_GOALS_MODAL });
  };

  const openCaloriesOutModal = () => {
    dispatch({ type: OPEN_CALORIESOUT_MODAL });
  };

  const closeCaloriesOutModal = () => {
    dispatch({ type: CLOSE_CALORIESOUT_MODAL });
  };

  const openCaloriesBMRModal = () => {
    dispatch({ type: OPEN_CALORIESBMR_MODAL });
  };

  const closeCaloriesBMRModal = () => {
    dispatch({ type: CLOSE_CALORIESBMR_MODAL });
  };

  return (
    <Context.Provider
      value={{
        logged_in: state.logged_in,
        activity: state.activity,
        loading: state.loading,
        bodyFat: state.bodyFat,
        bodyWeight: state.bodyWeight,
        sleep: state.sleep,
        heartRate: state.heartRate,
        food: state.food,
        showGoalsModal: state.showGoalsModal,
        showCaloriesOutModal: state.showCaloriesOutModal,
        showCaloriesBMRModal: state.showCaloriesBMRModal,
        showStepsModal: state.showStepsModal,
        showBMIModal: state.showBMIModal,
        showDistanceModal: state.showDistanceModal,
        showCalorieIntakeModal: state.showCalorieIntakeModal,
        showWeightModal: state.showWeightModal,
        showBodyFatModal: state.showBodyFatModal,
        showActivityModal: state.showActivityModal,
        showHeartRateModal: state.showHeartRateModal,
        showSleepModal: state.showSleepModal,
        login,
        logout,
        stopLoading,
        getActivityState,
        getBodyFatState,
        getBodyWeightState,
        getSleepState,
        getHeartRateState,
        getFoodState,
        openGoalsModal,
        closeGoalsModal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
