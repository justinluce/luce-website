import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import StateProvider from './context';
import { ThemeProvider } from './shared/themes/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <StateProvider>
        <App />
      </StateProvider>
    </ThemeProvider>
  </React.StrictMode>
);