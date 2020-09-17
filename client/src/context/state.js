import React, { useReducer } from "react";
import Context from "./context";
import reducer from "./reducer";
import { LOGGED_IN } from "./types";

const State = (props) => {
  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const initialState = {
    logged_in: false,
    loading: true,
    date: formatDate(new Date()),
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // actions

  return (
    <Context.Provider value={{ logged_in: state.logged_in }}>
      {props.children}
    </Context.Provider>
  );
};

export default State;
