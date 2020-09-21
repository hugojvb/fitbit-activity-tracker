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
        login,
        logout,
        stopLoading,
        getActivityState,
        getBodyFatState,
        getBodyWeightState,
        getSleepState,
        getHeartRateState,
        getFoodState,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
