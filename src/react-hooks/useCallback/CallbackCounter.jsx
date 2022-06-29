import React, { useCallback, useState } from 'react';

const functions = new Set();

const CallbackCounter = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increase1 = useCallback(() => {
    setCounter1(counter1 + 1);
  }, [counter1]);

  const increase2 = useCallback(() => {
    setCounter2(counter2 + 1);
  }, [counter2]);

  functions.add(increase1);
  functions.add(increase2);

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-6">
          <p>Contador 1: {counter1}</p>
          <p>Contador 2: {counter2}</p>
          <br />
          <button onClick={increase1} className="btn btn-primary">
            Aumentar Contador 1
          </button>
          <button onClick={increase2} className="btn btn-success">
            Aumentar Contador 2
          </button>
          <br />
          <p>Funciones Creadas: {functions.size}</p>
        </div>
      </div>
    </div>
  );
};

export default CallbackCounter;
