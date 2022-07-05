import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import TasksStore from './store/TasksStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));
const rootRender = () => {
  root.render(<App TasksStore={TasksStore} />);
};

rootRender();

TasksStore.subscribe(() => {
  rootRender();
});
