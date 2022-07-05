const addTaskAction = (name) => {
  return {
    type: '@TASKS/ADD',
    payload: {
      id: Math.floor(Math.random() * 9000000) + 1000000,
      name: name,
      isDone: false,
    },
  };
};

const toggleIsDoneAction = (id) => {
  return {
    type: '@TASKS/TOGGLEISDONE',
    payload: {
      id: id,
    },
  };
};

export { addTaskAction, toggleIsDoneAction };
