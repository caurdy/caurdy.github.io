import React, { Component } from 'react';
import './App.css';
import Home from '.';
import Intro from './Intro';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import NavBar from './navbar';
import toggleDarkMode from './darkMode';
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
                    <Route path='.' exact component={Home} />
                    <Route path='/Intro' component={Intro} />
                    <Route path='/About' component={About} />
                    <Route path='/Work' component={Work} />
                    <Route path='/Contact' component={Contact} />
                </Switch>
              </Router>
    );
  }
}
