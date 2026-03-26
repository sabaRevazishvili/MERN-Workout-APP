import React, { useReducer } from "react";
import authReducer from "./authReducer";
import { AuthContext } from "./context";

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  console.log("AuthContext state:", state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
