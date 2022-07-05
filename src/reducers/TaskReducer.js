const TaskReducer = (state, action) => {
  switch (action.type) {
    case '@TASKS/ADD':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case '@TASKS/TOGGLEISDONE':
      const { id } = action.payload;
      const newTasks = state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
      return { ...state, tasks: newTasks };
    default:
      return state;
  }
};

export default TaskReducer;
