import React from 'react';
import HeroElement from './HeroElement';

class HeroContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row mb-2">
          {this.props.heroes.map((hero) => {
            return <HeroElement hero={hero} />;
          })}
        </div>
      </div>
    );
  }
}

export default HeroContainer;
