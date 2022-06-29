import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
} from './NavbarElements';
import Sidebar from '../Sidebar/Sidebar';

const Index = () => {
  return (
    <>
      <Nav>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <NavBtn>
        <button className='btn btn-toggle' type='button'
                title='Toggle Dark Mode'>
          <i className="bi bi-brightness-high-fill"></i>
        </button>
        </NavBtn>
        <NavMenu>
          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/work' activeStyle>
            Work & Projects
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Index;