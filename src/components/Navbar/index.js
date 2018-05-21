import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="portfolio/projects" className="nav-link">PROJECTS</Link>
        <Link to="portfolio/about" className="nav-link">ABOUT</Link>
        <Link to="portfolio/contact" className="nav-link">CONTACT</Link>
      </nav>
    )
  }
}

export default Navbar;
