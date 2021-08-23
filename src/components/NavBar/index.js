import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
} from './NavbarElements';

const Index = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavBtn>
        <button className='btn btn-toggle' type='button'
                title='Toggle Dark Mode'>
          <i className="bi bi-brightness-high-fill"></i>
        </button>
        </NavBtn>
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/About' activeStyle>
            About
          </NavLink>
          <NavLink to='/Work' activeStyle>
            Work & Projects
          </NavLink>
          <NavLink to='/Contact' activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Index;