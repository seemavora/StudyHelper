import React, { useState } from 'react';

import './ProfileIcon.css';
import Icon from '../../static/img/profile/icon3.png';
import MiniIcon from '../../static/img/profile/mini-icon.png';
import Collection from '../../static/img/profile/book2.png';
import SignOut from '../../static/img/profile/exit.png';
import Logout from '../../Pages/Logout/Logout'

const ProfileIcon = () => {
  const [profile, setProfile] = useState(false);

  const renderMenu = () => {
    profile ? setProfile(false) : setProfile(true);
  };

  return (
    <div>
      {
        // eslint-disable-next-line
      }
      <button onClick={renderMenu} className='profile-button'>
        <img src={Icon} alt='profile-icon' className='profile-icon' />
      </button>

      <div className={`profile-menu ${profile ? 'fade-in' : 'fade-out'}`}>
        <div className='profile-menu-item'>
          <a href='/Profile'>
            <img src={MiniIcon} alt='profile' />

            <p>Profile</p>
          </a>
        </div>
        <div className='profile-menu-item'>
          <a href='/Collection'>
            <img src={Collection} alt='collection' />

            <p>Collection</p>
          </a>
        </div>
        <div className='profile-menu-item'>
          <a href='/' onClick = {Logout}>
            
            <img src={SignOut} alt='signout' />
            <p>Sign Out</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileIcon;
