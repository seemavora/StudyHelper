import React from 'react';
import './NavBar.css';

import logo from '../../static/img/logo.png';

const page = window.location.pathname;

const NavBar = () => {
  if (page === '/ContactUs') return <></>;

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
        {page === '/Login' ? (
          <li>
            <a href='/Register'>Register</a>
          </li>
        ) : (
          <li>
            <a href='/Login'>Login</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
