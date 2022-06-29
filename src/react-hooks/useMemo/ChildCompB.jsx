import { useMemo } from 'react';

const ChildCompB = ({ numberValue }) => {
  const result = useMemo(() => {
    console.log('CHILDCOMP B');
    let factorial = 1;
    for (let i = 1; i <= numberValue; i++) {
      factorial = factorial * i;
    }
    return factorial;
  }, [numberValue]);

  return (
    <p>
      Resultado: {numberValue}!={result}
    </p>
  );
};
export default ChildCompB;
