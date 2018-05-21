import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Projects extends Component {
  render() {
    return (
      <div className="container projects">
        {/* <h2 className="page-title">PROJECTS</h2> */}
        <div className="project-section palettable">
          <h3 className="project-title first">Palettable</h3>
          <div className="project-info">
            <img src={require("../../assets/img/app-screenshots/palettable-discover.png")} alt="Palettable Discover Page"/>
            <div>
              <p className="project-desc">Palettable is a mobile app that allows users to discover and generate beautiful color palettes. Users can explore pre-made color palettes on the 'Discover' page, as well as create their own color palettes by uploading or taking a picture of their surroundings on the 'Generate' page. Palettable utilizes the phone's built-in camera to capture and extract the prominent colors from an image to create unique color palettes.</p>
              <p className="built-with">Built with <strong>React Native</strong>, <strong>Xcode</strong>, <strong>iOS camera</strong>, <strong>Firebase</strong>, and the <strong>Clarifai Predict Color API</strong>.</p>
            </div>
          </div>
        </div>

        <div className="project-section calendar-app">
          <h3 className="project-title">Calendar</h3>
          <div className="project-info">
            <a href="https://still-earth-11122.herokuapp.com/" target="_blank">
              <img src={require("../../assets/img/app-screenshots/calendar-app.png")} alt="Calendar App Homepage"/>
            </a>
            <div>
              <p className="project-desc">A modern calendar app that allows users to login and create, edit, and delete events.</p>
              <p className="built-with">Built with <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>Moment.js</strong>.</p>
            </div>
          </div>
        </div>

        <div className="project-section next-episode">
          <h3 className="project-title">Next Episode</h3>
          <div className="project-info">
            <a href="https://next-episode-app.herokuapp.com/" target="_blank">
              <img src={require("../../assets/img/app-screenshots/next-episode-home.png")} alt="Next Episode Homepage"/>
            </a>
            <div>
              <p className="project-desc">Next Episode is a site that allows users to discover and track TV shows.</p>
              <p className="built-with">Built with <strong>Node.js</strong>, <strong>Express</strong>, <strong>EJS</strong>, and the <strong>TVDB API</strong>.</p>
            </div>
          </div>
        </div>

        <div className="project-section weather-app">
          <h3 className="project-title">Weather App</h3>
          <div className="project-info">
            <a href="http://marifolsom-weatherapp.bitballoon.com/" target="_blank">
              <img src={require("../../assets/img/app-screenshots/weather-app.png")} alt="Weather App Homepage"/>
            </a>
            <div>
              <p className="project-desc">A minimal weather app.</p>
              <p className="built-with">Built with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>vanilla Javascript</strong>.</p>
            </div>
          </div>
        </div>

        <div className="project-section donut-touch">
          <h3 className="project-title">Donut Touch</h3>
          <div className="project-info">
            <a href="http://donuttouch.bitballoon.com/" target="_blank">
              <img src={require("../../assets/img/app-screenshots/donut-touch.png")} alt="Donut Touch Level 1"/>
            </a>
            <div>
              <p className="project-desc">A donut themed cursor game.</p>
              <p className="built-with">Built with <strong>vanilla Javascript</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
