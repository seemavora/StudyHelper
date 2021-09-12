import React from 'react';
import Bug from '../../static/img/bug.svg';
import Cactus from '../../static/img/cactus.svg';
import Camera from '../../static/img/camera-alt.svg';
import background from '../../static/img/stockPhoto.jpg';
import logo from '../../static/img/logo.png';
import sample from '../../static/stock.mp4';

export const Cover = () => {
  return (
    <div>
      <section className={'showcase'}>
        <header>
          <img className='logo' src={logo} alt='' />
          <div className={'toggle'}></div>
          <button>Login</button>
        </header>

        <video muted loop autoPlay>
          <source
            src='https://stream.mux.com/JHiRymdY01P01A01LALyVWQ2yaOyzCEKsgB/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2MzE0NDQ3OTUsImF1ZCI6InYiLCJzdWIiOiJKSGlSeW1kWTAxUDAxQTAxTEFMeVZXUTJ5YU95ekNFS3NnQiJ9.sERW9A-KV4FX9jV6t9pFt48weIN73tr7SsAFMrmSgHo3XoNyA6xP1yEBTgc3G9wOYDZzyU8KPq6Lf4KrGNf_9c4OTKXsZwuuOiFYEw858nMSYSND5NSL-C3p1snSWrJ1zFFKxgBqb_CiXqE866-OdOuW37hp447lUiKNm4a5ekNcpwS1tsB3eHy2pupevyBHkbmft5aU7CWOf_vxcpOjLMhWKgdO8aaJ6GK2mzwuBakia4TNqCFtybsFvSNoCrfXL5KaoSZeSztkY-BCus2MND48lfeI1G63siZWd3pJJuiSOiABJ1SHYk_QPufET6sd9cYXLIJEM_xhNfcrynp0-w'
            type='video/mp4'
          />
        </video>
        {/* <img className='background' src={background} alt='classroom' /> */}
        <div className='overlay'></div>

        <div className='text'>
          <h2>Learning.</h2>
          <h3>Not Once</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href='https://google.com'>Explore</a>
        </div>

        <ul className='social'>
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
