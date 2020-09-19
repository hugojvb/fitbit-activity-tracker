import { GET_ACTIVITY, LOGIN, LOGOUT, STOP_LOADING } from "./types";

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
    case GET_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
