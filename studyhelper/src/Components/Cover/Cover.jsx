import React from 'react';

import NavBar from '../NavBar/NavBar';
import './Cover.css';

import Bug from '../../static/img/cover/bug.svg';
import Cactus from '../../static/img/cover/cactus.svg';
import Camera from '../../static/img/cover/camera-alt.svg';
import background from '../../static/img/cover/stockPhoto.jpg';
import logo from '../../static/img/logo.png';

const Cover = () => {
  return (
    <div>
      <section className='cover-showcase'>
        <header>
          <img className='cover-logo' src={logo} alt='' />
          <div className='cover-toggle'></div>
          <NavBar />
        </header>

        {/* <video muted loop autoPlay>
          <source
            src='https://media.istockphoto.com/videos/mens-hands-are-typing-on-the-laptop-keyboard-closeup-video-id1186325137'
            type='video/mp4'
          />
        </video> */}
        <img className='cover-background' src={background} alt='classroom' />
        <div className='cover-overlay'></div>

        <div className='cover-text'>
          <h2>Learning</h2>
          <h3>One Note Card At A Time</h3>
        </div>

        <ul className='cover-social'>
          <li>
            <a href='https://google.com'>
              <img style={{ width: 40, height: 40 }} src={Bug} alt='bug' />
            </a>
          </li>
          <li>
            <a href='https://google.com'>
              <img
                style={{ width: 40, height: 40 }}
                src={Cactus}
                alt='cactus'
              />
            </a>
          </li>
          <li>
            <a href='https://google.com'>
              <img
                style={{ width: 40, height: 40 }}
                src={Camera}
                alt='camera'
              />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Cover;
