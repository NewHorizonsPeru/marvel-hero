import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import TasksStore from './store/TasksStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <Provider store={TasksStore}>
    <App />
  </Provider>
);
