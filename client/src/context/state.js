import React, { useReducer } from "react";
import Context from "./context";
import reducer from "./reducer";
import { LOGIN, LOGOUT, GET_ACTIVITY } from "./types";

const State = (props) => {
  const initialState = {
    logged_in: false,
    activity: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // actions
  const login = () => {
    dispatch({ type: LOGIN });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  const getActivity = (activity) => {
    dispatch({ type: GET_ACTIVITY, payload: activity });
  };

  return (
    <Context.Provider
      value={{
        logged_in: state.logged_in,
        activity: state.activity,
        login,
        logout,
        getActivity,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
