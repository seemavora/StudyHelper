import React from 'react';
import './Body.css';

import lightBulb from '../../static/img/lightbulb.png';
import nlp from '../../static/img/nlp.png';
import calendar from '../../static/img/calendar.png';

export const Body = () => {
  return (
    <div>
      <div className='body'>
        <div className='about-us'>
          <div className='about-us-text'>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit </h1>
            <p>
              Soluta repudiandae animi delectus ea cupiditate iure nulla nemo
              eum aut, quam minima ratione assumenda veniam quas ullam
            </p>
          </div>
          <div className='quote-showcase'>
            <img src={lightBulb} alt='' />
          </div>
        </div>

        <div className='content'>
          <div className='content-right content-item'>
            <div>
              <img src={nlp} alt='' />
            </div>
            <div id='content-item-text'>
              <h1>AI Powered</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                repudiandae animi delectus ea cupiditate iure nulla nemo eum
                aut, quam minima ratione assumenda veniam quas ullam. Ipsum
                ipsam eos doloremque.
              </p>
            </div>
          </div>

          <div className='content-left content-item'>
            <div>
              <img src={calendar} alt='' />
            </div>
            <div id='content-item-text'>
              <h1>Google Calendar</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                repudiandae animi delectus ea cupiditate iure nulla nemo eum
                aut, quam minima ratione assumenda veniam quas ullam. Ipsum
                ipsam eos doloremque.
              </p>
            </div>
          </div>

          <div className='content-right content-item'>
            <div id='content-item-text'>
              <h1>Convenience is Yours</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                repudiandae animi delectus ea cupiditate iure nulla nemo eum
                aut, quam minima ratione assumenda veniam quas ullam. Ipsum
                ipsam eos doloremque.
              </p>
            </div>
          </div>

          <div className='content-left content-item'>
            <div id='content-item-text'>
              <h1>Additional Tools</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                repudiandae animi delectus ea cupiditate iure nulla nemo eum
                aut, quam minima ratione assumenda veniam quas ullam. Ipsum
                ipsam eos doloremque.
              </p>
            </div>
          </div>

          <div className='content-right content-item'>
            <div id='content-item-text'>
              <h1>Additional Tools</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                repudiandae animi delectus ea cupiditate iure nulla nemo eum
                aut, quam minima ratione assumenda veniam quas ullam. Ipsum
                ipsam eos doloremque.
              </p>
            </div>
          </div>
        </div>
        <footer>
          <ul>
            <li>Lorem ipsum</li>
            <li>dolor sit</li>
            <li>amet consectetur</li>
            <li>adipisicing elit</li>
          </ul>
        </footer>
      </div>
    </div>
  );
};
