import { useReducer, useContext } from 'react';
import opetarionsReducer from './reducers/operationsReducer';
import ApplicationContext from '../useContext/ApplicationContext';

const FourOperations = () => {
  const { isAuthenticated } = useContext(ApplicationContext);
  console.log(isAuthenticated);
  const [operations, dispatchOperations] = useReducer(opetarionsReducer, {
    counter: 0,
    frozen: false,
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <p>Contador: {operations.counter}</p>
          <button
            className="btn btn-success mr-3"
            onClick={() => {
              dispatchOperations({ type: 'INCREASE' });
            }}
          >
            Aumentar
          </button>
          <button
            className="btn btn-warning mr-3"
            onClick={() => {
              dispatchOperations({ type: 'DECREASE' });
            }}
          >
            Disminuir
          </button>
          <button
            className="btn btn-danger mr-3"
            onClick={() => {
              dispatchOperations({ type: 'RESET' });
            }}
          >
            Reiniciar
          </button>
          <button
            className="btn btn-primary mr-3"
            onClick={() => {
              dispatchOperations({ type: 'FROZEN' });
            }}
          >
            Congelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourOperations;
// import React, { useState } from 'react';

// function FourOperations() {
//   const [count, setCount] = useState(0);
//   const [frozen, setFrozen] = useState(false);

//   const handleIncrease = () => !frozen && setCount(count + 1);

//   const handleDecrease = () => !frozen && setCount(count - 1);

//   const handleReset = () => !frozen && setCount(0);

//   const handleFrozen = () => setFrozen(!frozen);

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-6">
//           <p>Contador: {count}</p>
//           <button className="btn btn-success mr-3" onClick={handleIncrease}>
//             Aumentar
//           </button>
//           <button className="btn btn-warning mr-3" onClick={handleDecrease}>
//             Disminuir
//           </button>
//           <button className="btn btn-danger mr-3" onClick={handleReset}>
//             Reiniciar
//           </button>
//           <button className="btn btn-primary mr-3" onClick={handleFrozen}>
//             Congelar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FourOperations;
