import React from 'react';

import '../styles/Navbar.css';

import logoMarvel from '../images/marvel-logo.png';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-custom">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logoMarvel} alt="Marvel" />
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
