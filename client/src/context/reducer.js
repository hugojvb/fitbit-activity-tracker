import {
  LOGIN,
  LOGOUT,
  STOP_LOADING,
  GET_ACTIVITY,
  GET_BODYFAT,
  GET_BODYWEIGHT,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logged_in: true,
      };
    case LOGOUT:
      return {
        ...state,
        logged_in: false,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GET_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };
    case GET_BODYFAT:
      return {
        ...state,
        bodyFat: action.payload,
      };
    case GET_BODYWEIGHT:
      return {
        ...state,
        bodyWeight: action.payload,
      };
    default:
      return state;
  }
};
