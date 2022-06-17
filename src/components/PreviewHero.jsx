import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Hero.css';

class PreviewHero extends React.Component {
  render() {
    return (
      <div className="col-sm-7">
        <br />
        <br />
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-danger">MARVEL</strong>
            <h3 className="mb-0">{this.props.heroName}</h3>
            <div className="mb-1 text-muted">{this.props.realName}</div>
            <div className="mb-1 text-muted">{this.props.description}</div>
          </div>
          <div className="col-auto d-none d-lg-block hero-img">
            <img
              className="bd-placeholder-img"
              width="200"
              height="250"
              src={this.props.imageUrl}
              alt="photoUrl"
            />
          </div>
        </div>
      </div>
    );
  }
}

PreviewHero.propTypes = {
  heroName: PropTypes.string,
  realName: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
};

PreviewHero.defaultProps = {
  heroName: 'Capitan America',
  realName: 'Steve Rogers',
  imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91ODZU+Qz-L.jpg',
  description:
    'Es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por los historietistas Joe Simon y Jack Kirby, el personaje apareció por primera vez en Captain America Comics #1 (marzo de 1941) de Timely Comics, predecesor de Marvel Comics. ',
};

export default PreviewHero;
