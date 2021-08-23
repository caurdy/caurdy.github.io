import React from 'react';
import WorkItem from './WorkItem';

const Work = () => {
  return (
    <section id='Work' className='container d-flex align-items-center'>
      <div className='w-100'>
        <h1 className='title title-accent display-5'>
          Work Experience & Projects
        </h1>
        <div className='row'>
        </div>
        <div className='row mt-5'>
          <WorkItem 
            title={'Customer Care Support Platform'}
            subtitle={'Data Analytics Intern \n Supply Chain Analytics \n Mars Incorporated, Summer \'21'}
            id={'Mars'}
            description={'Problem: The Customer Care team within the German Market supply chain group were receiving thousands of emails per week. ' +
            'The emails were generally from retailer or Mom&Pop customers concerning a variety of issues... availability, missing items, order confirmation, etc.' +
            ' Due to the amount of traffic, it was impossible for the associates to answer the most important emails on time. ' +
            'Thus, they came to our team (SCA) in order to find a solution which would cut down on time spent answering emails ' +
            'and figuring out which needed responses first. \n\n Solution: I created a Dash app which allowed users to upload emails in bulk. ' +
            'The application used an sklearn pipeline consisting of my own text cleansing function built specifically for emails, a TF-IDF vectorizer, ' +
            'and an SGD Classifier model (w/ hinge loss) to classify the email into one of seven categories. From there the email would ' +
            'be post-processed specifically for it\'s category. I.E. an email about availability would be scraped for item codes. The item ' +
            'codes would be fed through specific databases hosted in various platforms (Azure Data lake, SAP, Power BI) where the stock information ' +
            'about said item could be found. Then, the collected information was amalgamated and formatted into an email draft which the user could download and review ' +
            'before sending out. In theory this solution, if fully implemented, could save associates over 500+ hours per week in answering emails. ' +
            'This solution worked as a symbiotic tool so associate/customer behavior did not have to change while not invading privacy ' +
            'of our associates inboxes. Additionally, it avoided a lot of unnecessary bureaucratic time sinks which would delay development in an already short window. '}
            tech={['Python', 'NLP', 'Text Classification', 'Machine Learning', 'Dash', 'Data Science', 'Data Engineering']}
          />
          <WorkItem 
            title={'CSE 331: Algorithms & Data Structures'}
            subtitle={'Teaching Assistant - Project Co-Lead \n MSU College of Engineering, \'21-Present'}
            id={'CSE331'}
            description={'CSE 331 is one the most vital courses for any MSU student pursuing a career involving programming. ' +
            'Not only does this course teach fundamental DS/Algorithms but we also explain and enforce the concepts of time and space ' +
            'complexity. As a team we setup coding challenges, projects and exams to guide the student along their journey where ' +
            'we aim for them to be able to find optimal solutions, understanding when and when not to use a data structure, and' +
            'what makes a great algorithm. ' +
            '\n\nIn the role of a Project Co-lead, I have the responsibility of curating the projects in a way that makes ' +
            'the implementation of the data structures and algorithms feel intuitive. Through the intuition and applications, ' +
            'it\'s easier to explain the necessity of a data structure. Generally, each project revolves around ' +
            'the implementation of one structure and an application of it. \n\nAs a Teaching Assistant, I host weekly helproom hours' +
            'where I get to work one on one with students for two hours to explain concepts and get feedback about the course. So far' +
            ' I\'ve created coding challenges around hash tables and path finding (BFS/DFS/Dijkstra). The class is in Python. '}
            tech={['Python', 'Storytelling', 'Teaching', 'Communication', 'Team']}
          />
          <WorkItem 
            title={'Power Plant Live Data Visualization'}
            subtitle={'I&C Engineering Intern \n Monroe Power Plant \n DTE Energy, Summer \'20'}
            id={'MPP'}
            description={'Problem: The unit engineers at the Monroe Power Plant hold daily meetings about the status of the plant. In each' +
            'meeting they go through checks of various data about each unit to ensure everything is running normal. Checks about' +
            'temperatures, pressures, flow rates and more for all the components in a unit. This data is collected through' +
            'PLC software that isn\'t user friendly. The engineers needed a way to better track and analyze this data so ' +
            'they didnt have to spend as much time going through it. \n\n Solution: With two other interns, we created a data ' +
            'pipeline which extracted the information from the PLC side, cleansed, added and graphed it in Excel. Other plant ' +
            'data was already being tracked and displayed using excel so it was the simplest and most user-friendly solution. '}
            tech={['Excel', 'Data Engineering', 'Data Visualization', 'Team']}
          />
          <WorkItem
            title={'Physical and Chemical Vapor Deposition Systems'}
            subtitle={'Systems Engineering Intern \n Fraunhofer USA CCD, \'18-\'20'}
            id={'Fraunhofer'}
            description={'During my tenure at Fraunhofer, I worked on almost every system in the building. My main system ' +
            'was known as DS10 (short for Diamond System 10), which was the newest generation of diamond system there and a ' +
            'microwave plasma-assisted CVD machine.'+
            ' My contributions consisted of mechanical, electrical and software development on it. Since I\'m now a computer' +
            ' science student I speak mainly of the latter part of my contributions. However, I spent an excessive amount of time' +
            ' working on that machine and could speak on any of those aspects of it for an equally excessive amount of time. ' +
            'Unfortunately, I left before the machine ever reached production status. However, we were able to achieve plasma ' +
            'and have several thin film growth trials which resulted in polycrystalline growth which was cool to see. ' +
            '\n\n This project shaped a lot of who I am as an engineer, a developer and probably as a person. My former bosses, ' +
            ' Jan and Brandon taught me about the fundamental principles of safety, creativity, work ethic, continuous learning, and more ' +
            ' that are required of you to be a great engineer. I owe a great deal to them and cannot thank them enough for their ' +
            'guidance and patience with my growth from a stupid freshman to a slightly less stupid junior. There isn\'t enough room' +
            ' nor enough energy in my body to type everything I learned, accomplished, broke, fixed, discovered in that lab nor enough words to' +
            ' convey everything I found out about life from all those I worked with there. Maybe one day someone will clean up the mezzanine.' +
            ' '}
            tech={['TwinCAT', 'LabVIEW', 'Visual Studio', 'Engineering', 'Safety', 'Project Management', 'Documentation', 'Life']}
          />
          <WorkItem
            title={'Balloons Tower Defense Remake'}
            subtitle={'Student \n CSE 335: OOP Software Development'}
            id={'CSE335'}
            description={'For one of the two projects of the class, we were tasked with recreating the popular mobile game ' +
            'Balloon Towers Defense from near scratch. \n https://ninjakiwi.com/Games/Tower-Defense/Bloons-Tower-Defense-5.html \n ' +
            'With a team of four other students, over the course of a month, we recreated the game functionally including our own ' +
            'unique level, four unique towers, and two types of balloons. The game also included a scoring system. In doing so ' +
            'we received a group grade of 100%, and I received an individual grade of 100%. We used agile' +
            ' development techniques such as stand-ups, scrums, iterative development, etc. through the Trello platform. The ' +
            'game was written in C++ and utilized an object oriented modeling approach. Thus, we often drew out UML diagrams for our ' +
            'game using paradigm to understand how our classes would be setup and interact before writing code. '}
            tech={['C++', 'Agile', 'Team', 'Object-Oriented Modeling', 'Software development', 'Trello', 'UML', 'Paradigm']}
          />
          <WorkItem
            title={'Discord Chat Bot'}
            subtitle={'Personal Project'}
            id={'Discord'}
            description={'I created a discord chat bot first in javascript, then in python because I liked the python api better. ' +
            'The bot is command and event triggered. It will scrape messages for key words which trigger responses. Additionally, ' +
            'anyone in the chat can append to its vocabulary such that you can tell the bot what you want it to say when a certain word ' +
            'is said in chat. On user entrance events into a voice channel, it will play an audio clip depending on the user. ' +
            'It has other commands such as chat cleansing (deleting messages fitting a criteria from a text channel) and playing ' +
            'audio clips on command. I have future plans for extending its capabilities.'}
            tech={['JavaScript', 'Python', 'Fun']}
          />
        </div>
        <span className='d-flex'>
          <a className='btn btn-outline-main text-uppercase' 
            href='https://github.com/caurdy/' rel="noopener noreferrer"
            target='_blank'
          >
            Personal Github <i class="bi bi-chevron-right"></i>
          </a>
        </span>
      </div>
    </section>
  );
}

export default Work;