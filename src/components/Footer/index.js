import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="mailto:marifolsom@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className="icon email" src={require("../../assets/img/techology-logos/email-hover.png")} alt="Email Icon" />
        </a>
        <a href="https://www.linkedin.com/in/marisafolsom/" target="_blank" rel="noopener noreferrer">
          <img className="icon linkedin" src={require("../../assets/img/techology-logos/linkedin-hover.png")} alt="LinkedIn Icon" />
        </a>
        <a href="https://github.com/marifolsom/" target="_blank" rel="noopener noreferrer">
          <img className="icon github" src={require("../../assets/img/techology-logos/github-hover.png")} alt="GitHub Icon" />
        </a>
        <p>
          © 2018 Marisa Folsom
        </p>
        <p>
          Built with React, hosted on Google Cloud. Typeset in Avenir.
        </p>
      </footer>
    )
  }
}

export default Footer;
