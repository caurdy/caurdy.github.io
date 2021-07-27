import React from 'react';
import Resume from './assets/Resume.pdf';

const About = () => {
  return (
    <section id='About' className='container d-flex align-items-center'>
      <div className='w-100'>
        <div className='row'>
          <div className='col-4 text-second'>
            <h4 className='title d-flex align-items-center'>
              <i class="bi bi-code-square me-2"></i>
              Programming and Querying
            </h4>
            <ul>
              <li>C++</li>
              <li>C#</li>
              <li>Java</li>
              <li>Python</li>
              <li>Visual Basic</li>
              <li>SQL (MySQL, PostgreSQL)</li>
            </ul>

            <h4 className='title d-flex align-items-center'>
              <i class="bi bi-layout-text-window-reverse me-2"></i>
              Web
            </h4>
            <ul>
              <li>HTML</li>
              <li>CSS (Bootstrap, Bulma, Tailwind)</li>
              <li>JavaScript (jQuery, React, Angular, Aurelia)</li>
              <li>TypeScript</li>
              <li>PHP</li>
            </ul>

            <h4 className='title d-flex align-items-center'>
              <i class="bi bi-terminal me-2"></i>
              Technologies and Skills
            </h4>
            <ul>
              <li>Git</li>
              <li>Linux</li>
              <li>CLI/Bash</li>
              <li>Azure DevOps</li>
              <li>Jira</li>
              <li>Jenkins</li>
            </ul>
          </div>
        
          <div className='col-8'>
            <h1 className='title title-accent display-5'>
              I'm a 4th year computer science student
            </h1>
            <p>
              Currently studying at Michigan State University. Self-motivated 
              and passionate, I take my studies very seriously while also 
              looking for new opportunities where I can apply myself.
            </p>
            <p>
              I have had a couple of formal internships and experiences, where
              I've been able to implement what I have learned. During the school
               year, I tutor or work with professors, not only to help other
              students learn, but to also test my own understandings of
              computer science concepts.
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
                Resume <i class="bi bi-chevron-right"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;