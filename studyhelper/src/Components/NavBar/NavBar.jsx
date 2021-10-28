import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <a href='https://www.google.com/'>Home</a>
        </li>
        <li>
          <a href='/ContactUs'>Contact Us</a>
        </li>
        <li>
          <a href='https://www.google.com/'>Login</a>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
