import React from 'react';
import '../styles/Navbar.css';
import logoMarvel from '../images/marvel-logo.png';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-custom">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logoMarvel} alt="Marvel" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
