import React from 'react';

import FormHero from '../components/FormHero';
import PreviewHero from '../components/PreviewHero';

class NewHero extends React.Component {
  state = {
    counter: 0,
  };

  handleClickIncrease = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <React.Fragment>
        <FormHero
          counter={this.state.counter}
          handleClickIncrease={this.handleClickIncrease}
        />
        <PreviewHero counter={this.state.counter} />
      </React.Fragment>
    );
  }
}

export default NewHero;
