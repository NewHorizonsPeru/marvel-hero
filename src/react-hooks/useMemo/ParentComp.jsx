import { useState } from 'react';
import ChildCompA from './ChildCompA';
import ChildCompB from './ChildCompB';

const ParentComp = () => {
  const [heroName, setHeroName] = useState('Wolverine');
  const [numberValue, setNumberValue] = useState(1);

  return (
    <div className="container">
      <div className="row">
        <div className="form-group">
          <label htmlFor="heroName">
            <b>Hero</b>
          </label>
          <input
            type="text"
            name="heroName"
            className="form-control"
            value={heroName}
            onChange={(e) => setHeroName(e.target.value)}
          />
          <ChildCompA heroName={heroName} />
        </div>
        <div className="form-group">
          <label htmlFor="numberValue">
            <b>Factorial</b>
          </label>
          <input
            type="number"
            name="numberValue"
            className="form-control"
            value={numberValue}
            onChange={(e) => setNumberValue(e.target.value)}
          />
          <ChildCompB numberValue={numberValue} />
        </div>
      </div>
    </div>
  );
};

export default ParentComp;
