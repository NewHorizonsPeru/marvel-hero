import { useState } from 'react';

const Counter = () => {
  console.log('Renderizando...');
  const [counter, setCounter] = useState(50);

  return (
    <div className="container">
      <br />
      <div className="row">
        <p>Contador: {counter}</p>
        <div className="col-6">
          <button
            className="btn btn-warning"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Aumentar
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            Disminuir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
