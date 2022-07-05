import { createStore } from 'redux';
import TaskReducer from '../reducers/TaskReducer';

const TasksStore = createStore(TaskReducer, {
  tasks: [],
  loading: false,
  isAuthenticated: false,
  userInfo: {},
});

export default TasksStore;
