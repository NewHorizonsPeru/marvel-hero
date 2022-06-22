import React from 'react';
import { Link } from 'react-router-dom';

class ButtonNewHero extends React.Component {
  render() {
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
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonNewHero;
