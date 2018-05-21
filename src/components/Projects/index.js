import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Projects extends Component {
  render() {
    return (
      <div className="container projects">
        <h1 className="page-title">Projects</h1>
        <div className="project-section">
          <h3 className="project-title">Palettable</h3>
          <p>Palettable is a mobile app that allows users to discover and generate beautiful color palettes. Users can explore pre-made color palettes on the 'Discover' page, as well as create their own color palettes by uploading or taking a picture of their surroundings on the 'Generate' page. Palettable utilizes the phone's built-in camera to capture and extract the prominent colors from an image to create unique color palettes.</p>
          <p>Built with <strong>React Native</strong>, <strong>Xcode</strong>, <strong>iOS camera</strong>, <strong>Firebase</strong>, and the <strong>Clarifai Predict Color API</strong>.</p>
        </div>
        <div className="project-section">
          <a href="https://still-earth-11122.herokuapp.com/" target="_blank">
            <h3 className="project-title">Calendar</h3>
          </a>
          <p>A modern calendar app that allows users to login and create, edit, and delete events.</p>
          <p>Built with <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>Moment.js</strong>.</p>
        </div>
        <div className="project-section">
          <a href="https://next-episode-app.herokuapp.com/" target="_blank">
            <h3 className="project-title">Next Episode</h3>
          </a>
          <p>Next Episode is a site that allows users to discover and track TV shows.</p>
          <p>Built with <strong>Node.js</strong>, <strong>Express</strong>, <strong>EJS</strong>, and the <strong>TVDB API</strong>.</p>
        </div>
        <div className="project-section">
          <a href="http://marifolsom-weatherapp.bitballoon.com/" target="_blank">
            <h3 className="project-title">Weather App</h3>
          </a>
          <p>A minimal weather app.</p>
          <p>Built with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>vanilla Javascript</strong>.</p>
        </div>
        <div className="project-section">
          <a href="http://donuttouch.bitballoon.com/" target="_blank">
            <h3 className="project-title">Donut Touch</h3>
          </a>
          <p>A donut themed cursor game.</p>
          <p>Built with <strong>vanilla Javascript</strong>.</p>
        </div>
      </div>
    )
  }
}

export default Projects;
