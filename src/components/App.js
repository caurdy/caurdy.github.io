import React, { Component, Fragment } from 'react';
import './App.css';
import Intro from './Intro';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import toggleDarkMode from './darkMode';

export default class App extends Component {
  componentDidMount() {
    toggleDarkMode();
  }
  
  render() {
    return (
      <Fragment>
        <button className='btn btn-toggle' type='button' 
          title='Toggle Dark Mode'
        >
          <i class="bi bi-brightness-high-fill"></i>
        </button>
        <Intro />
        <About />
        <Work />
        <Contact />
      </Fragment> 
    );
  }
}
