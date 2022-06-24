import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import ApplicationContextProvider from './react-hooks/useContext/ApplicationContextProvider';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <ApplicationContextProvider>
    <App />
  </ApplicationContextProvider>
);
