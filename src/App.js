import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="site-container">
          <h1 className="site-title">Marisa Folsom</h1>
          <Navbar />
          <Route exact path="portfolio" render={() => <Redirect to="portfolio/projects"/>} />
          <Route exact path="portfolio/projects" component={Projects} />
          <Route exact path="portfolio/about" component={About} />
          <Route exact path="portfolio/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}

export default App;
