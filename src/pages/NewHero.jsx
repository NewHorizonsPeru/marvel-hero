import React from 'react';

import FormHero from '../components/FormHero';
import PreviewHero from '../components/PreviewHero';

class NewHero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FormHero />
        <PreviewHero />
      </React.Fragment>
    );
  }
}

export default NewHero;
