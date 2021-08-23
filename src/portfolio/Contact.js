import React from 'react';
import Resume from '../components/assets/Resume.pdf';

const Contact = () => {
  return (
    <section id='Contact' className='container d-flex align-items-center'>
      <div className='w-100 text-center'>
        <h1 className='title display-5'>
          <span className='title-accent'>Contact Me</span>
        </h1>
        <h4 className='subtitle'>
          Interested in any full-time roles utilizing ML/AI technology
        </h4>
        <div className='row text-uppercase mt-5 pt-5'>
          <div className='col'>
            <a href='https://www.linkedin.com/in/jacob-caurdy/'
               rel="noopener noreferrer"
              className='h5'
            >
              LinkedIn
            </a>
          </div>
          <div className='col'>
            <a href='mailto:caurdyja@msu.edu' className='h5'>Email</a>
          </div>
          <div className='col'>
            <a href={Resume} className='h5'
              title="Download Resume.pdf"
            >
              Resume
            </a>
          </div>
          <div className='col'>
            <a href="https://www.egr.msu.edu/seescholars/scholars/jacob-caurdy" className='h5'>
              SEE Scholar Bio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;