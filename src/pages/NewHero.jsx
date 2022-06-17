import React from 'react';

import FormHero from '../components/FormHero';
import PreviewHero from '../components/PreviewHero';

class NewHero extends React.Component {
  constructor() {
    super();
    this.state = {
      heroName: 'CAPTIAN AMERICA',
      realName: 'STEVE ROGERS',
      description: 'DESCPRIPTION',
      photoUrl:
        'https://upload.wikimedia.org/wikipedia/en/9/91/CaptainAmerica109.jpg',
    };
    console.log('1. CONSTRUCTOR');
  }
  componentDidMount() {
    console.log('3. COMPONENTDIDMOUNT');
  }
  componentDidUpdate() {
    console.log('5. COMPONENTDIDUPDATE');
  }
  render() {
    console.log('2/4. RENDER');
    return (
      <React.Fragment>
        <FormHero hero={this.state} onChangeState={this.handleChangeState} />
        <PreviewHero
          heroName={this.state.heroName}
          realName={this.state.realName}
          imageUrl={this.state.imageUrl}
          description={this.state.description}
        />
      </React.Fragment>
    );
  }
  handleClickSaveHero = (e) => {
    console.log('Funcion ejecutada desde New Hero.');
  };

  handleChangeState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
}

export default NewHero;
