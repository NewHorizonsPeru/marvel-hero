import React from 'react';

const ChildCompA = React.memo(({ heroName }) => {
  console.log('CHILDCOMP A');
  return <p>Texto: {heroName}</p>;
});

export default ChildCompA;
