import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from 'components/App';
import './index.css';

const theme = {
  colors: {
    buttonBorder: '#d9d9d9',
    buttonAccent: '#4b4bf3',
  },
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
