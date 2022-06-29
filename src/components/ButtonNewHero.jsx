import React from 'react';
import { Link } from 'react-router-dom';
import useIncrease from '../hooks/useIncrease';
const ButtonNewHero = () => {
  const [counter, setCounter] = useIncrease(10);

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link
            className="btn btn-success btn-lg float-right ml-auto"
            to="/newhero"
          >
            Nuevo
          </Link>
          <button
            className="btn btn-success btn-lg float-right ml-auto"
            onClick={() => setCounter(counter + 1)}
          >
            Incrementar {counter}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonNewHero;
