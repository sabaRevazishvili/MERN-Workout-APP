import React, { useReducer } from "react";
import { WorkoutContext } from "./WorkoutContext";
import workoutReducer from "./WorkoutReducer";

const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, { workouts: null });
  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;
