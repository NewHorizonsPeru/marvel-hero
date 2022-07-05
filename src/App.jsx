import { addTaskAction, toggleIsDoneAction } from './actions/TaskAction';

const App = ({ TasksStore }) => {
  const state = TasksStore.getState();
  const addTask = (e) => {
    e.preventDefault();
    const { target } = e;
    const name = target.task.value;
    target.task.value = '';
    TasksStore.dispatch(addTaskAction(name));
  };
  const toggleIsDone = (id) => {
    TasksStore.dispatch(toggleIsDoneAction(id));
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

export default App;
