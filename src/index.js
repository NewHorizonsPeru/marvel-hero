import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import TaskReducer from './reducers/TaskReducer';
import { addTaskAction, toggleIsDoneAction } from './actions/TaskAction';

const tasksStore = createStore(TaskReducer);

const App = () => {
  const state = tasksStore.getState();
  const addTask = (e) => {
    e.preventDefault();
    const { target } = e;
    const name = target.task.value;
    target.task.value = '';
    tasksStore.dispatch(addTaskAction(name));
  };
  const toggleIsDone = (id) => {
    tasksStore.dispatch(toggleIsDoneAction(id));
  };
  return (
    <main className="container">
      <div className="p-4">
        <br />
        <form onSubmit={addTask}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese una tarea"
              name="task"
            />
            <button type="submit" className="btn btn-primary">
              Agregar
            </button>
          </div>
        </form>
        <ul className="list-group">
          {state.map((task) => {
            return (
              <li
                key={task.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {task.name}

                <span
                  className={`badge bg-${task.isDone ? 'success' : 'warning'}`}
                  onClick={() => toggleIsDone(task.id)}
                >
                  {task.isDone ? 'Terminada' : 'Pendiente'}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
const rootRender = () => {
  root.render(<App />);
};

rootRender();

tasksStore.subscribe(() => {
  rootRender();
});
