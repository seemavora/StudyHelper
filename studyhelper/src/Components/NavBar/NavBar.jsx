import React from 'react';
import { menuItems as links } from './menuItems';
import ProfileIcon from '../Profile/ProfileIcon';

import './NavBar.css';
import logo from '../../static/img/logo.png';

const page = window.location.pathname;

const navLogic = {
  '/': ['Home', 'Contact Us', 'Login'],
  '/ContactUs': ['Home', 'Contact Us', 'Login'],
  '/Login': ['Home', 'Contact Us', 'Register'],
  '/Register': ['Home', 'Contact Us', 'Login'],
  '/Portal': ['Home', 'Contact Us'],
  '/Collection': ['Home', 'Contact Us'],
  '/NoteCard': ['Home', 'Contact Us'],
  '/Questions': ['Home', 'Contact Us'],
};

const profLogic = ['/Portal', '/Collection', '/NoteCard', '/Questions'];

// Shouldn't be here BUT it is. Will remove later
const token = 'validuser12345';

const portalStyle = {
  backgroundColor: '#8a3d2413',
};

const NavBar = (props) => {
  if (page === '/ContactUs') return <></>;

  const id = localStorage.getItem('ID');

  if (!id && profLogic.includes(page)) {
    window.location = '/';
  }

  return (
    <div
      className='navbar-navbar'
      style={profLogic.includes(page) ? portalStyle : {}}
    >
      <img className='navbar-logo' src={logo} alt='' />
      <ul className='navbar-nav-links'>
        {links.map((x) => {
          let valid = navLogic[page].includes(x.title);

          return (
            <li style={!valid ? { display: 'none' } : { ...this }} key={x.url}>
              <a href={x.url}>{valid ? x.title : ''}</a>
            </li>
          );
        })}

        {token === 'validuser12345' && profLogic.includes(page) ? (
          <li>
            <ProfileIcon />
          </li>
        ) : (
          ''
        )}
      </ul>
    </div>
  );
};

export default NavBar;
