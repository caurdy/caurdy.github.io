import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/Home">
        Home
      </a>
      <a className="menu-item" href="/About">
        About
      </a>
      <a className="menu-item" href="/Work">
        Projects & Experience
      </a>
      <a className="menu-item" href="/Contact">
        Contact
      </a>
    </Menu>
  );
};