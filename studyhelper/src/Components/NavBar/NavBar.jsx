import React from 'react';
import { menuItems as links } from './menuItems';
import ProfileIcon from '../Profile/ProfileIcon';

import './NavBar.css';
import logo from '../../static/img/logo.png';

const page = window.location.pathname;

// Shouldn't be here BUT it is. Will remove later
const token = 'validuser12345';

const portalStyle = {
  backgroundColor: '#8a3d2413',
};

const NavBar = (props) => {
  if (page === '/ContactUs') return <></>;

  return (
    <div
      className='navbar-navbar'
      style={page === '/Portal' ? portalStyle : {}}
    >
      <img className='navbar-logo' src={logo} alt='' />
      <ul className='navbar-nav-links'>
        {links.map((x) => {
          // prettier-ignore
          if (
            x.url === page ||
            (page === '/Portal' &&
            !['Home', 'Contact Us'].includes(x.title)) ||
            (page !== '/Collection' && x.title === 'Portal') ||
            (page === '/' && x.title === 'Register')
          ) {
            return <li style={{ display: 'none' }} key={x.url}></li>;
          } else {
            return (
              <li key={x.url}>
                <a href={x.url}>{x.title}</a>
              </li>
            );
          }
        })}

        {token === 'validuser12345' && page === '/Portal' ? (
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
