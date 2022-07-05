const TaskReducer = (state = [], action) => {
  switch (action.type) {
    case '@TASKS/ADD':
      return [...state, action.payload];
    case '@TASKS/TOGGLEISDONE':
      const { id } = action.payload;
      return state.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
    default:
      return state;
  }
};

export default TaskReducer;
