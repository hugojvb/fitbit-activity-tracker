import React, { useReducer } from "react";
import Context from "./context";
import reducer from "./reducer";
import { LOGGED_IN } from "./types";

const State = (props) => {
  const initialState = {
    logged_in: false,
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
