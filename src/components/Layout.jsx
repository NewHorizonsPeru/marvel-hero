import React from 'react';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

import NewHero from '../pages/NewHero';
import Heroes from '../pages/Heroes';
import Hero from '../pages/Hero';

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <div className="container">
          <div className="row">
            {/** CONTENIDO DINAMICO **/}
            <Hero />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
