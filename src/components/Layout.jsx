import React from 'react';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

import NewHero from '../pages/NewHero';

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <div className="container">
          <div className="row">
            {/** CONTENIDO DINAMICO **/}
            <NewHero />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
