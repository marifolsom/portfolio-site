import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Contact extends Component {
  render() {
    return (
      <div className="container contact">
        {/* <h2 className="page-title">CONTACT</h2> */}
        <h3>Get in touch with me!</h3>
        <form action="mailto:marifolsom@gmail.com" method="post" enctype="text/plain">
          <div className="input-area">
            <label for="name">Name:</label>
            <input type="text" name="name" />
          </div>

          <div className="input-area">
            <label for="email">E-mail:</label>
            <input type="text" name="email" />
          </div>

          <div className="input-area">
            <label for="comment">Comment:</label>
            <textarea name="comment" />
          </div>

          <div className="buttons">
            <button type="submit" value="Send">Send</button>
            <button type="reset" value="Reset">Reset</button>
          </div>
        </form>
        <p>Or just email me directly at <a href="mailto:marifolsom@gmail.com" target="_blank">marifolsom@gmail.com</a>.</p>
      </div>
    )
  }
}

export default Contact;
