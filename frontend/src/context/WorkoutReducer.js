import {
  SET_WORKOUT,
  CREATE_WORKOUT,
  DELETE_WORKOUT,
  EDIT_WORKOUT,
} from "./actions";

const workoutReducer = (state, action) => {
  switch (action.type) {
    case SET_WORKOUT:
      return {
        workouts: action.payload,
      };
    case CREATE_WORKOUT: {
      return {
        workouts: [action.payload, ...state.workouts],
      };
    }
    case DELETE_WORKOUT: {
      return {
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id,
        ),
      };
    }
    case EDIT_WORKOUT: {
      return {
        workouts: state.workouts.map((workout) =>
          workout._id === action.payload._id ? action.payload : workout,
        ),
      };
    }
    default:
      return state;
  }
};

export default workoutReducer;
