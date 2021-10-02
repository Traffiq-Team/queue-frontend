import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

const store = createContext({});
const { Provider } = store;

const initialState = {
  loading: false,
  redirectUrl: '',
  error: null,
};

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, GlobalProvider };
