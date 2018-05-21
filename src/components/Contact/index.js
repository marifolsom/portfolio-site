import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Contact extends Component {
  render() {
    return (
      <div className="container contact">
        {/* <h2 className="page-title">CONTACT</h2> */}
        <p>To get in touch, feel free to reach out with an <a href="mailto:marifolsom@gmail.com">email</a>!</p>
      </div>
    )
  }
}

export default Contact;
