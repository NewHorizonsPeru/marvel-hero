import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Layout;
