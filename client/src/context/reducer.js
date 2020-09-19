import { GET_ACTIVITY, LOGIN, LOGOUT } from "./types";

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
    default:
      return state;
  }
};
