import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Projects extends Component {
  render() {
    return (
      <div className="container projects">
        {/* <h2 className="page-title">PROJECTS</h2> */}
        <div className="project-section palettable">
          <h2 className="project-title first">PALETTABLE</h2>
          <div className="project-info">
            <img src={require("../../assets/img/app-screenshots/palettable-discover.png")} alt="Palettable Discover Page"/>
            <div>
              <p className="project-desc">Palettable is a mobile app that allows users to discover and generate beautiful color palettes. Users can explore pre-made color palettes on the 'Discover' page, as well as create their own color palettes by uploading or taking a picture of their surroundings on the 'Generate' page. Palettable utilizes the phone's built-in camera to capture and extract the prominent colors from an image to create unique color palettes.</p>
              <p className="built-with">Built with <strong>React Native</strong>, <strong>Xcode</strong>, <strong>iOS camera</strong>, <strong>Firebase</strong>, and the <strong>Clarifai Predict Color API</strong>.</p>
              <div className="built-with">
                <span className="technology">
                  React Native
                </span>
                <span className="technology">
                  Firebase
                </span>
                <span className="technology">
                  Xcode
                </span>
                <span className="technology">
                  iOS Camera
                </span>
                <span className="technology">
                  Clarifai Predict API
                </span>
                <span className="technology">
                  HTML5
                </span>
                <span className="technology">
                  CSS3
                </span>
              </div>
              <div className="buttons">
                <button>Visit App</button>
                <button>GitHub Repo</button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section calendar-app">
          <h2 className="project-title">CALENDAR</h2>
          <div className="project-info">
            <a href="https://still-earth-11122.herokuapp.com/" target="_blank">
              <img src={require("../../assets/img/app-screenshots/calendar-app.png")} alt="Calendar App Homepage"/>
            </a>
            <div>
              <p className="project-desc">A modern calendar app that allows users to login and create, edit, and delete events.</p>
              <div className="built-with">
                <span className="technology">
                  React
                </span>
                <span className="technology">
                  Node.js
                </span>
                <span className="technology">
                  Express
                </span>
                <span className="technology">
                  PostgreSQL
                </span>
                <span className="technology">
                  JSON Web Tokens
                </span>
                <span className="technology">
                  Moment.js
                </span>
                <span className="technology">
                  HTML5
                </span>
                <span className="technology">
                  CSS3
                </span>
              </div>
              <div className="buttons">
                <button>Visit App</button>
                <button>GitHub Repo</button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section next-episode">
          <h2 className="project-title">NEXT EPISODE</h2>
          <div className="project-info">
            <a href="https://next-episode-app.herokuapp.com/" target="_blank">
              <img src={require("../../assets/img/app-screenshots/next-episode.png")} alt="Next Episode Homepage"/>
            </a>
            <div>
              <p className="project-desc">Next Episode is a TV show discovery app for users to explore The Movie Database, a vast community built movie and TV database, to find information regarding their favorite shows and to save them to their favorites.</p>
              <div className="built-with">
                <span className="technology">
                  Node.js
                </span>
                <span className="technology">
                  Express
                </span>
                <span className="technology">
                  PostgreSQL
                </span>
                <span className="technology">
                  EJS
                </span>
                <span className="technology">
                  TMDb API
                </span>
                <span className="technology">
                  bcrypt
                </span>
                <span className="technology">
                  HTML5
                </span>
                <span className="technology">
                  CSS3
                </span>
              </div>
              <div className="buttons">
                <button>Visit App</button>
                <button>GitHub Repo</button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section weather-app">
          <h2 className="project-title">MINIMAL WEATHER</h2>
          <div className="project-info">
            <a href="http://marifolsom-weatherapp.bitballoon.com/" target="_blank">
              <img src={require("../../assets/img/app-screenshots/weather-app.png")} alt="Weather App Homepage"/>
            </a>
            <div>
              <p className="project-desc">Minimal Weather is a simply designed weather app. It's minimal interface allows users to enter a zipcode, displaying the current temperature and weather, minimum and maximum temperatures of the day, a five-day forecast, and the ability to toggle between celcius and farenheit.</p>
              <div className="built-with">
                <span className="technology">
                  Node.js
                </span>
                <span className="technology">
                  Express
                </span>
                <span className="technology">
                  jQuery
                </span>
                <span className="technology">
                  OpenWeatherMap API
                </span>
                <span className="technology">
                  HTML5
                </span>
                <span className="technology">
                  CSS3
                </span>
              </div>
              <div className="buttons">
                <button>Visit App</button>
                <button>GitHub Repo</button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section donut-touch">
          <h2 className="project-title">DONUT TOUCH</h2>
          <div className="project-info">
            <a href="http://donuttouch.bitballoon.com/" target="_blank">
              <img src={require("../../assets/img/app-screenshots/donut-touch.png")} alt="Donut Touch Level 1"/>
            </a>
            <div>
              <p className="project-desc">Donut Touch is a donut themed cursor game. To win, a user must get from the start zone to the end zone without letting their cursor touch the obstacles or leave the game screen. Donuts are collected for points.</p>
              <div className="built-with">
                <span className="technology">
                  Javascript
                </span>
                <span className="technology">
                  jQuery
                </span>
                <span className="technology">
                  HTML5
                </span>
                <span className="technology">
                  CSS3
                </span>
              </div>
              <div className="buttons">
                <button>Visit App</button>
                <button>GitHub Repo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
