import React from 'react';
import { Link } from 'react-router-dom';

const ButtonNewHero = () => {
  return (
    <Link className="btn btn-success btn-lg float-right ml-auto" to="/newhero">
      Nuevo
    </Link>
  );
};

export default ButtonNewHero;
