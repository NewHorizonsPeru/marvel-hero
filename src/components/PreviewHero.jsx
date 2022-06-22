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
              src={this.props.photoUrl}
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
  photoUrl: PropTypes.string,
  description: PropTypes.string,
};

PreviewHero.defaultProps = {
  heroName: 'HERO NAME',
  realName: 'REAL NAME',
  photoUrl:
    'https://i.pinimg.com/originals/b5/34/df/b534df05c4b06ebd32159b2f9325d83f.jpg',
  description: 'DESCRIPTION',
};

export default PreviewHero;
