import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
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

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { store, GlobalProvider };
