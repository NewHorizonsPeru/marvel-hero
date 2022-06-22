import React from 'react';

import '../styles/Hero.css';

class PreviewHero extends React.Component {
  render() {
    return (
      <div className="col-sm-7">
        <br />
        <br />
        <h1>Contador: {this.props.counter}</h1>
      </div>
    );
  }
}

export default PreviewHero;
