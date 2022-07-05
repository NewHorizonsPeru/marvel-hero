import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleIsDoneAction } from '../actions/TaskAction';

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const toggleIsDone = (id) => {
    dispatch(toggleIsDoneAction(id));
  };
  return (
    <ul className="list-group">
      {tasks.map((task) => {
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
  );
};

export default Tasks;
