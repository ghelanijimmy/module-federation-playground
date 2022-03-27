import React, { createContext, useReducer } from "react";

const initialState = {
  name: "Jimmy",
};

const initState = (initialState) => initialState;

export const AppContext = createContext(initialState);

const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INIT":
      return {
        ...state,
        name: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const AppProvider = ({ children }) => {
  console.log("hi");
  const [state, dispatch] = useReducer(appReducer, initialState, initState);
  console.log(state, dispatch);
  return (
    <AppContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
