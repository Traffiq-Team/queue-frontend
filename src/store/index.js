import React, { createContext, useReducer } from 'react';
import rootReducer from './rootReducer';

const store = createContext({});
const { Provider } = store;

const initialState = {
  redirectUrl: ''
};

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, GlobalProvider };
