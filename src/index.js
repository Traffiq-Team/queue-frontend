import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalProvider } from './store';
import { ThemeProvider } from 'evergreen-ui';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <ThemeProvider value={theme}>
        <App />
      </ThemeProvider>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
