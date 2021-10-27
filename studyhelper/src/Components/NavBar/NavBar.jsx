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
          <a href='/registration'>Contact Us</a>
        </li>
        {page === '/login' ? undefined : (
          <li>
            <a href='/login'>Login</a>
          </li>
        )}
        {page === '/login' ? (
          <li>
            <a href='/register'>Register</a>
          </li>
        ) : undefined}
      </ul>
    </div>
  );
};

export default NavBar;
