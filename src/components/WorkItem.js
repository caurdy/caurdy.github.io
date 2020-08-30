import React, { Fragment, useState } from 'react';

const WorkItem = (props) => {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className='col-4 mb-5'>
      <h3 className='title'>{props.title}</h3>
      <h5 className='subtitle'>{props.subtitle}</h5>
      <button className='btn btn-main py-1 px-2' type='button' data-toggle='collapse' 
        data-target={`#${props.id}`} aria-expanded='false' 
        aria-controls={props.id} onClick={() => setCollapse(!collapse)}
        title='Read more'
      >
        { collapse &&
          <Fragment>
            <span className='mr-2'>Read more</span>
            <svg width='1em' height='1em' viewBox='0 0 16 16' className='bi bi-chevron-down' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
              <path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/>
            </svg>
          </Fragment>
        }
        { !collapse &&
          <Fragment>
            <span className='mr-2'>Read less</span>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
            </svg>
          </Fragment>
        }
      </button>
      <div id={props.id} className='collapse mt-3'>
        <p className='text-second mb-2'>
          {props.description}
        </p>

        { props.link &&
          <span className='d-flex'>
            <a className='btn btn-outline-main text-uppercase' href={props.link} 
              rel="noopener noreferrer" target='_blank'
            >
              See it here
              <svg width="1em" height="1em" viewBox="0 0 16 16" 
                class="bi bi-chevron-right align-self-center" 
                fill="currentColor" xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </a>
          </span>
        }
        <nav className='nav text-uppercase text-second font-weight-bold'
        >
          {props.tech.map((item, index) => {
            return (
              <p  key={index} className='nav-link ml-0'>{item}</p>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
export default WorkItem;