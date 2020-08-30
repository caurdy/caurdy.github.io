import React from 'react';
import Resume from './assets/Resume.pdf';

const About = () => {
  return (
    <section id='About' className='container d-flex align-items-center'>
      <div className='w-100'>
        <div className='row'>
          <div className='col-4 text-second'>
            <h4 className='title d-flex align-items-center'>
              <svg width="1em" height="1em" viewBox="0 0 16 16" 
                className="bi bi-code-square mr-2" fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path fill-rule="evenodd" d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
              </svg>
              Programming and Querying
            </h4>
            <ul>
              <li>C++</li>
              <li>C#</li>
              <li>Python</li>
              <li>Visual Basic</li>
              <li>SQL (MySQL, PostgreSQL)</li>
            </ul>

            <h4 className='title d-flex align-items-center'>
              <svg width="1em" height="1em" viewBox="0 0 16 16" 
                class="bi bi-columns mr-2" fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" d="M15 2H1v12h14V2zM1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"/>
                <path fill-rule="evenodd" d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z"/>
              </svg>
              Web
            </h4>
            <ul>
              <li>HTML</li>
              <li>CSS (Bootstrap, Bulma, Tailwind)</li>
              <li>JavaScript (jQuery, Ajax, React, Angular, Aurelia)</li>
              <li>TypeScript</li>
              <li>PHP</li>
            </ul>

            <h4 className='title d-flex align-items-center'>
              <svg width="1em" height="1em" viewBox="0 0 16 16" 
                class="bi bi-terminal mr-2" fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"/>
                <path fill-rule="evenodd" d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.146 4.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 1 1-.708-.708L4.793 6.5 3.146 4.854a.5.5 0 0 1 0-.708z"/>
              </svg>
              Technologies and Skills
            </h4>
            <ul>
              <li>Git</li>
              <li>Linux Environment</li>
              <li>Command Line Interface</li>
              <li>Visual Studio</li>
              <li>Azure DevOps</li>
            </ul>
          </div>
        
          <div className='col-8'>
            <h1 className='title title-accent display-5'>
              I'm a 3rd year computer science student
            </h1>
            <p>
              Currently studying at Michigan State University. Self-motivated 
              and passionate, I take my studies very seriously while also 
              looking for new opportunities where I can apply myself.
            </p>
            <p>
              I have been lucky to get an internship here at my university, 
              working for Information Services of MSU's Residential and Housing 
              Services, where I developed applications to be used by MSU staff 
              campuswide. I am currently working for Michigan-based electronics 
              manufacturer Gentex Corporation, where I help maintain internal 
              applications used to operate factory processes.
            </p>
            <p>
              On my own time, I try and teach myself what school and work 
              doesn't, which has resulted in small projects that have either 
              amused my friends or have actually come out to be quite useful.
            </p>
            <p>
              I am focused on my solutions being efficient and adaptable. I'm
              always learning and am ready to make mistakes and improve myself. 
              Ultimately, I'm aiming to become a developer whose work I can take 
              pride in and can inspire others.
            </p>
            <span className='d-flex'>
              <a className='btn btn-outline-main text-uppercase' href={Resume}
                rel="noopener noreferrer" target='_blank'
              >
                Resume
                <svg width="1em" height="1em" viewBox="0 0 16 16" 
                  class="bi bi-chevron-right align-self-center" 
                  fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;