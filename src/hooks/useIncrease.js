import { useState } from 'react';

const useIncrease = (value) => {
  const [counter, setCounter] = useState(value);
  if (counter > 20) setCounter(0);
  return [counter, setCounter];
};

export default useIncrease;
