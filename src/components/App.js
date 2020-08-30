import React, { Fragment } from 'react';
import './App.css';
import Intro from './Intro';
import About from './About';
import Work from './Work';
import Contact from './Contact';

function App() {
  return (
    <Fragment>
      <Intro />
      <About />
      <Work />
      <Contact />
    </Fragment> 
  );
}

export default App;
