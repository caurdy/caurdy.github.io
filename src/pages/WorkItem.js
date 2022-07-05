import React, { Fragment, useState } from 'react';

const WorkItem = (props) => {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className='col-sm-6 col-xs-1 mb-5'>
      <h3 className='title'>{props.title}</h3>
      <h5 className='subtitle'>{props.subtitle}</h5>
      <button className='btn btn-main py-1 px-2' type='button' data-toggle='collapse' 
        data-target={`#${props.id}`} aria-expanded='false' 
        aria-controls={props.id} onClick={() => setCollapse(!collapse)}
        title='Read more'
      >
        { collapse &&
          <Fragment>
            Read more <i class="bi bi-chevron-down"></i>
          </Fragment>
        }
        { !collapse &&
          <Fragment>
            Read less <i class="bi bi-chevron-up"></i>
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
              See it here <i class="bi bi-chevron-right"></i>
            </a>
          </span>
        }
        <nav className='nav text-uppercase text-second font-weight-bold'
        >
          {props.tech.map((item, index) => {
            return (
              <p  key={index} className='nav-link ms-0'>{item}</p>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
export default WorkItem;