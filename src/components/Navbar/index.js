import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/projects" className="nav-link">PROJECTS</Link>
        <Link to="/about" className="nav-link">ABOUT</Link>
        <Link to="/contact" className="nav-link">CONTACT</Link>
      </nav>
    )
  }
}

export default Navbar;
