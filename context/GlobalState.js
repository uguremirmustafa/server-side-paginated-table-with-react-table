import React, { createContext, useReducer } from 'react';
import reducers from './Reducers';
export const AppContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    modalOpen: false,
  };
  const [state, dispatch] = useReducer(reducers, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
