import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="container about">
        {/* <h2 className="page-title">ABOUT</h2> */}
        <div className="about-me">
          <img src={require("../../assets/img/about.JPG")} alt="Weather App Homepage"/>
          <div>
            <p>
              Hi! I’m Marisa. I'm a digital artist and web developer, passionate about good design and intuitive user experience. I take pleasure in going beyond the basics, delving into different solutions to recreate what I’m envisioning in my head. I believe that there is no end to what you can learn, so long as you put in the effort to learn it.
            </p>
            <p>
              Outside of code, I enjoy creating in other ways. Check out some of my photography <a href="https://marisafolsom.format.com/" target="_blank" rel="noopener noreferrer">here</a>!
            </p>
            <div className="buttons">
              <span className="button">
                <a href="https://drive.google.com/open?id=10yK-IKRxk7TEWeXqYXhVsAb7eIzVULhv" target="_blank" rel="noopener noreferrer">Resume</a>
              </span>
            </div>
          </div>
        </div>

        <h2 className="skills-title">SKILLS</h2>
        <div className="skills-container">
          <div className="skills">
            <h3>Front-end:</h3>
            <ul>
              <li>Javascript (ES6)</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>React Native</li>
              <li>jQuery</li>
              <li>AJAX</li>
            </ul>
          </div>

          <div className="skills">
            <h3>Back-end:</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Ruby on Rails</li>
              <li>SQL (PostgreSQL, MySQL)</li>
              <li>Firebase</li>
              <li>PHP</li>
            </ul>
          </div>

          <div className="skills">
            <h3>Other:</h3>
            <ul>
              <li>Git</li>
              <li>Chrome Dev Tools</li>
              <li>Adobe Creative Suite</li>
              <li>Invision</li>
              <li>Marvel</li>
              <li>UX Design</li>
              <li>Wire-framing</li>
              <li>Responsive web design</li>
              <li>Digital/Film photography</li>
              <li>Fluent in Japanese</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
