import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StateProvider from './context';
import { ThemeProvider } from './shared/themes/ThemeProvider';
import ReactGA from 'react-ga4';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
// );

//Initialize GA4
const root = ReactDOM.createRoot(document.getElementById("root"));
ReactGA.initialize("G-RXSQ0HH7M8");
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <StateProvider>
        <App />
      </StateProvider>
    </ThemeProvider>
  </React.StrictMode>
);
const SendAnalytics = ()=> {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(SendAnalytics);