import React from 'react';

import Book from '../../static/img/portal/book.svg';
import TextBook from '../../static/img/portal/textbooks.svg';
import Verified from '../../static/img/portal/verified.svg';
import One from '../../static/img/portal/one.png';
import Two from '../../static/img/portal/two.png';

import './PortalPreSubmit.css';

const PortalPreSubmit = (props) => {
  return (
    <div className={`portal-view portal-${props.view}`}>
      <div className='portal-text-flavor'>
        <div className='portal-text-frame'>
          <div className='portal-text-item'>
            <img src={Verified} alt='verified' />
            <p>98% accuracy of all generated notecards</p>
          </div>
          <div className='portal-text-item'>
            <img src={TextBook} alt='textbook' />
            <p>Powered by NLP, a linguistic artificial intelligence</p>
          </div>
          <div className='portal-text-item'>
            <img src={Book} alt='book' />
            <p>Thousands of valuable notecards in seconds</p>
          </div>
        </div>
      </div>

      <div className='portal-instruct'>
        <div className='portal-instruct-item'>
          <img src={One} alt='one' />
          <p>Enter any Youtube URL into the search bar above.</p>
        </div>
        <div className='portal-instruct-item'>
          <img src={Two} alt='two' />
          <p>And hit submit!</p>
        </div>
      </div>
    </div>
  );
};

export default PortalPreSubmit;
