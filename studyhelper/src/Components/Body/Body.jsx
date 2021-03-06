import React from 'react';
import './Body.css';

import lightBulb from '../../static/img/body/lightbulb.png';
import nlp from '../../static/img/body/nlp.png';
import calendar from '../../static/img/body/calendar.png';
import brain from '../../static/img/body/brain1.png';
import gear from '../../static/img/body/gear1.png';

const Body = () => {
  return (
    <div>
      <div className='body-body'>
        <div className='body-about-us'>
          <div className='body-about-us-text'>
            <h1>Create smart note cards from Youtube with a single click </h1>
            <p>
              Using neuro-linguistic programming (NLP), important content is
              identified in a matter of seconds for you. Skip watching hours of
              media.
            </p>
          </div>
          <div className='body-quote-showcase'>
            <img src={lightBulb} alt='' />
          </div>
        </div>

        <div className='body-content'>
          <div className='body-content-right body-content-item'>
            <div>
              <img src={nlp} alt='' />
            </div>
            <div id='body-content-item-text'>
              <h1>AI Powered</h1>
              <p>
                NLP is based on three fundamental concepts: neurology, language,
                and function. It is the study of the mind's mental and emotional
                components in regards to forming and reacting to lingustic
                characteristcs. These relationships are percieved under the
                programming model of the mind as an internal operation system.
              </p>
            </div>
          </div>

          <div className='body-content-left body-content-item'>
            <div>
              <img id='body-calendar' src={calendar} alt='' />
            </div>
            <div id='body-content-item-text'>
              <h1>Google Calendar</h1>
              <p>Swap this out later for something else if it doesn't happen</p>
            </div>
          </div>

          <div className='body-content-right body-content-item'>
            <div>
              <img src={brain} alt='' />
            </div>
            <div id='body-content-item-text'>
              <h1>Convenience is Yours</h1>
              <p>
                All users are one click away from generating a personal
                collection of smart, interactive note cards.
              </p>
            </div>
          </div>

          <div className='body-content-left body-content-item'>
            <div>
              <img src={gear} alt='' />
            </div>
            <div id='body-content-item-text'>
              <h1>Additional Tools</h1>
              <p>Discord bot or something</p>
            </div>
          </div>
        </div>
        <footer>
          <ul>
            <li>&#169; 2021 Scribe </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Body;
