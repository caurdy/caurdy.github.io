import React from 'react';
import Resume from './assets/Resume.pdf';

const Contact = () => {
  return (
    <section id='Contact' className='container d-flex align-items-center'>
      <div className='w-100 text-center'>
        <h1 className='title display-5'>
          <span className='title-accent'>Contact Me</span>
        </h1>
        <h4 className='subtitle'>
          Looking for internships & co-ops
        </h4>
        <div className='row text-uppercase mt-5 pt-5'>
          <div className='col'>
            <a href='https://www.linkedin.com/in/sean-nguyen-756736166/'
              className='h5'
            >
              LinkedIn
            </a>
          </div>
          <div className='col'>
            <a href='mailto:nguye610@msu.edu' className='h5'>Email</a>
          </div>
          <div className='col'>
            <a href={Resume} className='h5'
              title="I know, this is the third place I've put my resume. I'm sorry, please hire me."
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;