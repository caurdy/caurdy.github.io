import React from 'react';
import WorkItem from './WorkItem';

const Work = () => {
  return (
    <section id='Work' className='container d-flex align-items-center'>
      <div className='w-100'>
        <h1 className='title title-accent display-5'>
          Work & Projects
        </h1>
        <div className='row'>
        </div>
        <div className='row mt-5'>
          <WorkItem 
            title={'Data Refresh Solution'}
            subtitle={'Ally Financial, 2021'}
            id={'DataRefresh'}
            description={'Every data refresh breaks functionality in several tools used within the test automation team, and the loss of functionality has always been realized at critical times. There are a series of manual steps taken to restore functionality, but these steps took hours, and worst case, days to accomplish. I was tasked with finding a solution to this problem. I decided to automate these steps using a Jenkins job and scripts, which generate new data to fix the tools, adds the data into the tools\' codebase, and automatically create a pull request for the team to approve the automated changes. The automated process takes a minute at maximum.'}
            tech={['Jenkins', 'Groovy', 'BASH', 'Python']}
          />
          <WorkItem 
            title={'CSE 331 Coursework'}
            subtitle={'MSU College of Engineering, 2021'}
            id={'CSE331'}
            description={'As an undergraduate learning assistant for CSE 331: Data Structures and Algorithms, I was tasked with creating homework assignments and projects for students to create a solution for. These projects\' difficulties needed to scale with the students\' learning and could not be too difficult. I created a handful of projects, most notable were an optimized hybrid sort using merge sort and insertion sort, using a trie to index and search for specific terms, and creating a graph implementation.'}
            tech={['Python']}
          />
          <WorkItem 
            title={'MEI'}
            subtitle={'Gentex Corporation, 2020'}
            id={'MEI'}
            description={'Stands for Manufacturing Execution Interface. MEI is used by factory operators to track and process operations for jobs, which ultimately create parts. While my time at Gentex led me to add small features and fix bugs, my biggest contribution to MEI was the addition of the defect location tracker. Should a part be defective, operators can log and mark the defect on the part and scrap it. The defect locations are stored in their own database table, and can be pulled for reporting reasons.'}
            tech={['TypeScript', 'Aurelia', 'CSS', 'Bootstrap', 'SQL']}
          />
          <WorkItem 
            title={'MES Web'}
            subtitle={'Gentex Corporation, 2020'}
            id={'MESWeb'}
            description={'An app used internally by Gentex to view and pull data from Industrial, Manufacturing, and Business happenings within the company. With this app, I was mostly tasked with fixing bugs, adding columns to tables, and adding inputs to forms. I have built a few forms where operators can issue or return items by a specific operation code they belong to.'}
            tech={['C#', 'JavaScript', 'JQuery', 'CSS', 'Material-UI', 'SQL']}
          />
          <WorkItem 
            title={'MSU Sports Camps'}
            subtitle={'MSU RHS IS, 2020'}
            id={'SportsCamps'}
            description={'A website where people can view and sign up for Michigan State sport camps that are open for sign up during the summer, bringing in near a million dollars in revenue for sport camps each year. On the backend, admins and coaches can edit season information, edit camps, and manually process camp orders. My project was to help revamp the frontend to create a more appealing and comfortable user experience. On the backend, I added a few new features, such as coaches can add documents and forms for people to download, admins can update notices, and updated report exports for people who\'ve signed up for camps.'}
            tech={['PHP', 'JavaScript', 'JQuery', 'CSS', 'PostgreSQL']}
            link='https://www.sportcamps.msu.edu/'
          />
          <WorkItem 
            title={'Service Portal'}
            subtitle={'MSU RHS IS, 2018'}
            id={'ServicePortal'}
            description={'A webapp where service desk workers at MSU\'s residential halls can log and track relevant information for residents. It is used in every hall on campus. Most notably incoming packages are dropped off at the service desk, where they will be logged and Service Portal will notify residents through email that their package has arrived. Residents may also borrow items, such as keys and access cards, from the desk, which the app will also track and notify residents if their item is overdue for return. My contributions were implementing and maintaining the package and item loan features. Also as the lead student developer, I oversaw and reviewed features such as resident lookup and tracking.'}
            tech={['PHP', 'JavaScript', 'JQuery', 'CSS', 'Bootstrap', 'PostgreSQL']}
          />
          <WorkItem 
            title={'Monies'}
            subtitle={'Personal, 2020'}
            id={'Monies'}
            description={'A webapp where users can put in categorized, monthly expenses and estimated incomes and calculate the amount of money they have leftover each month to budget out. Users may see a percentage breakdown of their expenses, and set a goal amount to save towards, which will then return how long it\'ll take to save that goal. Users can also add their own custom expenses. A fun project where I tried to teach myself React Hooks while create a potentially useful app.'}
            tech={['JavaScript', 'React', 'CSS', 'Bootstrap']}
            link='https://senguyen1011.github.io/monies/'
          />
          <WorkItem 
            title={'MechKeys'}
            subtitle={'Personal, 2020'}
            id={'MechKeys'}
            description={'A webapp where users can search and view mechanical keyboards. Keyboards can be searched for by name and form factor. More keyboards are planned to be added, as well as a page for searching for keyboard switches. A small proof-of-concept project to learn Angular, create services, and use API calls.'}
            tech={['JavaScript', 'Angular', 'CSS', 'Bootstrap']}
            link='https://senguyen1011.github.io/mechkeys/mech'
          />
        </div>
        <span className='d-flex'>
          <a className='btn btn-outline-main text-uppercase' 
            href='https://github.com/senguyen1011' rel="noopener noreferrer" 
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