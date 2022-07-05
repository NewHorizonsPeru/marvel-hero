import React from 'react';
import { useDispatch } from 'react-redux';
import { addTaskAction } from '../actions/TaskAction';

const FormTasks = () => {
  const dispatch = useDispatch();
  const addTask = (e) => {
    e.preventDefault();
    const { target } = e;
    const name = target.task.value;
    target.task.value = '';
    dispatch(addTaskAction(name));
  };
  return (
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
  );
};

export default FormTasks;
