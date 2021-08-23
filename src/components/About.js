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
              Languages
            </h4>
            <ul>
              <li>Python</li>
              <li>C++</li>
              <li>MATLAB</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS (Bootstrap)</li>
              <li>JavaScript (React)</li>
              <li>Spanish (Sorta)</li>
            </ul>

            <h4 className='title d-flex align-items-center'>
              <i class="bi bi-clipboard-data me-2"></i>
              Python Data Analytics
            </h4>
            <ul>
              <li>Preprocessing (Pandas, NLTK, Spacy)</li>
              <li>Modeling (Keras, Sklearn, PyTorch)</li>
              <li>Visualization (Matplotlib, Dash)</li>
              <li>NLP (Transformers/BERT, Text classification)</li>
            </ul>

            <h4 className='title d-flex align-items-center'>
              <i class="bi bi-terminal me-2"></i>
              Technologies, Skills, Etc.
            </h4>
            <ul>
              <li>Azure DevOps</li>
              <li>Azure Machine Learning</li>
              <li>Agile</li>
              <li>Git</li>
              <li>GDB</li>
              <li>Linux</li>
              <li>CLI/Bash</li>
            </ul>
          </div>
        
          <div className='col-8'>
            <h1 className='title title-accent display-5'>
              Hey, I'm Jacob
            </h1>
            <p>
              Currently I'm a senior <a href="https://cse.msu.edu/About/">Computer Science Engineering</a> major with
              a minor in <a href="https://cogsci.msu.edu/">Cognitive Science</a> at Michigan State.
              My first experience with programming was using Dev-C++ in high school. It enjoyed it but I decided to go with
              Mechanical Engineering as my initial major, with a minor in CSE. I enjoyed CADD and thought ME would suit me.
              However, once I got into the junior-level courses at MSU I realized how boring ME really was.
              Thus, I switched my major to CSE, dropped ME, and picked up my new minor. The switch re-ignited my
              passion for programming and I haven't looked back since. Additionally, it let me explore the emerging field
              of cognitive science which had peaked my interest for awhile.
            </p>
            <p>
              You see, intelligence fascinates me and I wanted to understand it from both technical and biological
              perspectives to better comprehend the phenomena and how it can be used to innovate our society. Not only do I believe
              understanding intelligence (and the brain as a whole) unlocks the next generation of technology,
              I also believe understanding it will better our relationships with ourselves and with others.
              Naturally, my interests led to me to explore the fields on machine learning and artificial intelligence.
              My first experience of which was Andrew Ng's <a href="https://www.coursera.org/learn/machine-learning">
              Stanford Machine Learning Course</a>. I loved the course and wanted to learn more so since then I've taken
              2 more ML/AI courses, and enrolled in a few others for this upcoming year. CSE404 Machine Learning,
              <a href="https://www.coursera.org/specializations/deep-learning"> Deep Learning Specialization </a> and
              CSE 891 Computational Foundations of AI, CSE 891 Genetic Programming respectively.
            </p>
            <p>
              So far, my work journey has taken me through many fields including R&D, Energy, and Food & Drink and many
              different roles. Through all the experience I've learned how to be adaptable, efficient and a quick learner.
              I get heavily invested in my projects while approaching them with a minimalistic and long-term mindset.
              What's the simplest way to achieve the end goal? How can I break down this project into digestible pieces?
              How will this project's capabilities be extended and supported throughout it's lifetime and what's the
              optimal way to write it so long-term support is viable? I attempt hold these questions in mind when exploring
              a new project. You can explore my previous projects and work experience below.
            </p>
            <p>
              In my free-time I enjoy playing rugby, video games, reading and working out. Additionally,
              I am the Vice President of the <a href="https://www.michiganstaterugby.com/"> Men's Rugby Club </a>
              at MSU where I've met many great friends and have made even more memories. I appreciate you taking the time
              to get to know me, have a good one, Jacob.
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