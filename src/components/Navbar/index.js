import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavLink exact={true} activeClassName='is-active' to="/projects" className="nav-link">PROJECTS</NavLink>
        <NavLink exact={true} activeClassName='is-active' to="/about" className="nav-link">ABOUT</NavLink>
        <NavLink exact={true} activeClassName='is-active' to="/contact" className="nav-link">CONTACT</NavLink>
      </nav>
    )
  }
}

export default Navbar;
