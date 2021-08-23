import React, { Component } from 'react';
import './App.css';
import Home from './portfolio';
import About from './portfolio/About';
import Work from './portfolio/Work';
import Contact from './portfolio/Contact';
import NavBar from './components/NavBar';
import toggleDarkMode from './components/darkMode';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends Component {
  componentDidMount() {
    toggleDarkMode();
  }
  
  render() {
    return (
              <Router>
                <NavBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/About' component={About} />
                    <Route path='/Work' component={Work} />
                    <Route path='/Contact' component={Contact} />
                </Switch>
              </Router>
    );
  }
}
