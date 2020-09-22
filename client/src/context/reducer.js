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
  OPEN_MODAL,
  CLOSE_MODAL,
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
    case GET_SLEEP:
      return {
        ...state,
        sleep: action.payload,
      };
    case GET_HEARTRATE:
      return {
        ...state,
        heartRate: action.payload,
      };
    case GET_FOOD:
      return {
        ...state,
        food: action.payload,
      };
    case OPEN_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};
