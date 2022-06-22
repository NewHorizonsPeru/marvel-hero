import React, { Component } from 'react';
import HeroElement from './HeroElement';

class HeroContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mb-2">
          {this.props.heroes.map((hero) => {
            return (
              <div className="col-md-6" key={hero.id}>
                <HeroElement hero={hero} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HeroContainer;
