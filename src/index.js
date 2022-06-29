import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';

/** REDUCER **/
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case '@INCREASE':
      state = state + 1;
      break;
    case '@DECREASE':
      state = state - 1;
      break;
    case '@RESET':
      state = 0;
      break;
    default:
      break;
  }
  return state;
};

/** STORE O ESTADO **/
const counterStore = createStore(counterReducer);

/** ACCIONES **/
const actionIncrease = {
  type: '@INCREASE',
};

const actionDecrease = {
  type: '@DECREASE',
};

const actionReset = {
  type: '@RESET',
};

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>{counterStore.getState()}</h1>
          <button
            className="btn btn-primary"
            onClick={() => counterStore.dispatch(actionIncrease)}
          >
            Aumentar
          </button>
          <button
            className="btn btn-warning"
            onClick={() => counterStore.dispatch(actionDecrease)}
          >
            Disminuir
          </button>
          <button
            className="btn btn-danger"
            onClick={() => counterStore.dispatch(actionReset)}
          >
            Resetear
          </button>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
const rootRender = () => {
  root.render(<App />);
};

rootRender();

counterStore.subscribe(() => {
  rootRender();
});
