import React from 'react';
import Resume from './assets/Resume.pdf';

const Intro = () => {
  return (
    <section className='container d-flex align-items-center'>
      <div className='w-100'>
        <h1 className='title title-accent display-2'>Hey, I'm Sean Nguyen</h1>
        <h1 className='subtitle'>
          Student Software & Web Developer
        </h1>
        <nav className='nav text-uppercase h5'>
          <a className='nav-link ml-0' href='#About'>About</a>
          <a className='nav-link' href='#Work'>Work</a>
          <a className='nav-link' href='#Contact'>Contact</a>
          <a className='nav-link' href={Resume} 
            rel='noopener noreferrer' target='_blank'
          >
            Resume
          </a>
        </nav>
      </div>
    </section>
  );
}

export default Intro;