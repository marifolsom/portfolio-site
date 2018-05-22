import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="mailto:marifolsom@gmail.com" target="_blank">Email</a>
        <a href="https://www.linkedin.com/in/marisafolsom/" target="_blank">LinkedIn</a>
        <a href="https://github.com/marifolsom/" target="_blank">GitHub</a>
        <p>© 2018 Marisa Folsom</p>
      </footer>
    )
  }
}

export default Footer;
