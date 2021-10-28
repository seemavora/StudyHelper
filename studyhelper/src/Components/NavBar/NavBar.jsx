import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/ContactUs'>Contact Us</a>
        </li>
        <li>
          <a href='/Registeration'>Registeration</a>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
