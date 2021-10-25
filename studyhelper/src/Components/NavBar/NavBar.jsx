import React from 'react';
import './NavBar.css';

import logo from '../../static/img/logo.png';

const page = window.location.pathname;

const NavBar = () => {
  return (
    <div className='navbar-navbar'>
      <img src={logo} alt='' />
      <ul className='navbar-nav-links'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/ContactUs'>Contact Us</a>
        </li>
        {page === '/Login' ? undefined : (
          <li>
            <a href='/Login'>Login</a>
          </li>
        )}
        {page === '/Login' ? (
          <li>
            <a href='/Register'>Register</a>
          </li>
        ) : undefined}
      </ul>
    </div>
  );
};

export default NavBar;
