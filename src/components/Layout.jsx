import React from 'react';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <div className="container">
          <div className="row">{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
