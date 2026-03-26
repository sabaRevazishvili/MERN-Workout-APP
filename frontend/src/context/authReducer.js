import { LOGIN, LOGOUT } from "./actions";

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: null };
    default:
      state;
  }
};

export default authReducer;
