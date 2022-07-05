import { createStore } from 'redux';
import TaskReducer from '../reducers/TaskReducer';

const TasksStore = createStore(
  TaskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default TasksStore;
