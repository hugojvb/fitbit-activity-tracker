import React, { useReducer } from "react";
import Context from "./context";
import reducer from "./reducer";
import { LOGIN, LOGOUT, GET_ACTIVITY, STOP_LOADING } from "./types";

const State = (props) => {
  const initialState = {
    logged_in: false,
    activity: {},
    loading: true,
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

  const stopLoading = () => {
    dispatch({ type: STOP_LOADING });
  };

  return (
    <Context.Provider
      value={{
        logged_in: state.logged_in,
        activity: state.activity,
        loading: state.loading,
        login,
        logout,
        getActivity,
        stopLoading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
