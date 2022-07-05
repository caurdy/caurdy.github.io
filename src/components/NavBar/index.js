import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
} from './NavbarElements';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const Index = () => {
  return (
    <>
      <Nav>
        <NavBtn>
        <button className='btn btn-toggle' type='button'
                title='Toggle Dark Mode'>
          <i className="bi bi-brightness-high-fill"/>
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