import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="container projects">
        {/* <h2 className="page-title">PROJECTS</h2> */}
        <div className="project-section palettable">
          <h2 className="project-title first">PALETTABLE</h2>
          <div className="project-info">
            {/* <img className="app-screenshot" src={require("../../assets/img/app-screenshots/palettable-discover.png")} alt="Palettable Discover Page"/> */}
            <video className="app-screenshot" autoPlay loop>
              <source src={require("../../assets/img/app-screenshots/palettable-recording.m4v")} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div>
              <p className="project-desc">
                Palettable is a mobile app that allows users to discover and generate beautiful color palettes. Users can explore pre-made color palettes on the "Discover" page, as well as create their own color palettes by uploading or taking a picture of their surroundings on the "Generate" page. Palettable utilizes the phone's built-in camera to capture and extract the prominent colors from an image to create unique color palettes.
              </p>
              <div className="built-with">
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/react.png")} alt="React Logo" />
                  React Native
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/firebase.png")} alt="Firebase Logo" />
                  Firebase
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/xcode.png")} alt="Xcode Logo" />
                  Xcode
                </div>
                <div className="technology">
                  iOS Camera
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/clarifai.png")} alt="Clarifai Logo" />
                  Clarifai Predict API
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/html.png")} alt="HTML Logo" />
                  HTML5
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/css.png")} alt="CSS Logo" />
                  CSS3
                </div>
              </div>
              <div className="buttons">
                <span className="button">
                  <a href="https://github.com/marifolsom/palettable" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section calendar-app">
          <h2 className="project-title">CALENDAR</h2>
          <div className="project-info">
            <a href="https://still-earth-11122.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img className="app-screenshot" src={require("../../assets/img/app-screenshots/calendar-app.png")} alt="Calendar App Homepage"/>
            </a>
            <div>
              <p className="project-desc">
                A modern calendar app that allows users to login and create, edit, and delete events.
              </p>
              <div className="built-with">
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/react.png")} alt="React Logo" />
                  React
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/nodejs.png")} alt="Node.js Logo" />
                  Node.js
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/express.png")} alt="Express Logo" />
                  Express
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/psql.png")} alt="PostgreSQL Logo" />
                  PostgreSQL
                </div>
                {/* <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/jwt.png")} alt="JWT Logo" />
                  JSON Web Tokens
                </div> */}
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/momentjs.png")} alt="Moment.js Logo" />
                  Moment.js
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/html.png")} alt="HTML Logo" />
                  HTML5
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/css.png")} alt="CSS Logo" />
                  CSS3
                </div>
              </div>
              <div className="buttons">
                <span className="button">
                  <a href="https://still-earth-11122.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit App</a>
                </span>
                <span className="button">
                  <a href="https://github.com/mattesongrossman/Calendar_App" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section next-episode">
          <h2 className="project-title">NEXT EPISODE</h2>
          <div className="project-info">
            <a href="https://next-episode-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img className="app-screenshot" src={require("../../assets/img/app-screenshots/next-episode.png")} alt="Next Episode Homepage"/>
            </a>
            <div>
              <p className="project-desc">
                Next Episode was a group project, and is a TV show discovery app for users to explore The Movie Database, a vast community built movie and TV database, to find information regarding their favorite shows and to save them to their favorites.
              </p>
              <div className="built-with">
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/nodejs.png")} alt="Node.js Logo" />
                  Node.js
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/express.png")} alt="Express Logo" />
                  Express
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/psql.png")} alt="PostgreSQL Logo" />
                  PostgreSQL
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/ejs.png")} alt="EJS Logo" />
                  EJS
                </div>
                <div className="technology">
                  TMDb API
                </div>
                <div className="technology">
                  bcrypt
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/html.png")} alt="HTML Logo" />
                  HTML5
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/css.png")} alt="CSS Logo" />
                  CSS3
                </div>
              </div>
              <div className="buttons">
                <span className="button">
                  <a href="https://next-episode-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit App</a>
                </span>
                <span className="button">
                  <a href="https://github.com/marifolsom/next-episode" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section weather-app">
          <h2 className="project-title">MINIMAL WEATHER</h2>
          <div className="project-info">
            <a href="http://minimal-weather.bitballoon.com/" target="_blank" rel="noopener noreferrer">
              <img className="app-screenshot" src={require("../../assets/img/app-screenshots/weather-app.png")} alt="Weather App Homepage"/>
            </a>
            <div>
              <p className="project-desc">
                Minimal Weather is a simply designed weather app. Its minimal interface allows users to enter a zipcode, displaying the current temperature and weather, minimum and maximum temperatures of the day, a five-day forecast, and the ability to toggle between celcius and farenheit.
              </p>
              <div className="built-with">
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/nodejs.png")} alt="Node.js Logo" />
                  Node.js
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/express.png")} alt="Express Logo" />
                  Express
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/jquery.png")} alt="jQuery Logo" />
                  jQuery
                </div>
                <div className="technology">
                  OpenWeatherMap API
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/html.png")} alt="HTML Logo" />
                  HTML5
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/css.png")} alt="CSS Logo" />
                  CSS3
                </div>
              </div>
              <div className="buttons">
                <span className="button">
                  <a href="http://minimal-weather.bitballoon.com/" target="_blank" rel="noopener noreferrer">Visit App</a>
                </span>
                <span className="button">
                  <a href="https://github.com/marifolsom/minimal-weather" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section donut-touch">
          <h2 className="project-title">DONUT TOUCH</h2>
          <div className="project-info">
            <a href="http://donuttouch.bitballoon.com/" target="_blank" rel="noopener noreferrer">
              <img className="app-screenshot" src={require("../../assets/img/app-screenshots/donut-touch.png")} alt="Donut Touch Level 1"/>
            </a>
            <div>
              <p className="project-desc">
                Donut Touch is a donut themed cursor game. To win, a user must get from the start zone to the end zone without letting their cursor touch the obstacles or leave the game screen. Donuts are collected for points.
              </p>
              <div className="built-with">
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/js.png")} alt="Javascript Logo" />
                  Javascript
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/jquery.png")} alt="jQuery Logo" />
                  jQuery
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/html.png")} alt="HTML Logo" />
                  HTML5
                </div>
                <div className="technology">
                  <img className="logo" src={require("../../assets/img/techology-logos/css.png")} alt="CSS Logo" />
                  CSS3
                </div>
              </div>
              <div className="buttons">
                <span className="button">
                  <a href="http://donuttouch.bitballoon.com/" target="_blank" rel="noopener noreferrer">Visit App</a>
                </span>
                <span className="button">
                  <a href="https://github.com/marifolsom/donut-touch" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
