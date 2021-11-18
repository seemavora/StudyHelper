import React, { useState } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { Button } from '../../Components/Button/Button';

import Book from '../../static/img/portal/book.svg';
import TextBook from '../../static/img/portal/textbooks.svg';
import Verified from '../../static/img/portal/verified.svg';

import './Portal.css';

const Portal = () => {
  const [link, setLink] = useState('');

  const inputChange = (e) => {
    setLink(e.target.value);
  };

  const onClick = () => {
    console.log('USER CLICKED ' + link);
  };

  return (
    <div className='portal-body'>
      <div className='portal-form'>
        <SearchBar textChange={inputChange} />

        <div className='portal-submit'>
          <div className='portal-submit-button'>
            <Button
              children='Submit'
              buttonStyle='btn--primary--solid'
              buttonSize='btn--medium'
              onClick={onClick}
            />
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default Portal;
