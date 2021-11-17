import React, { useState } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { Button } from '../../Components/Button/Button';

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
          <div className='portal-radio'>
            <div>
              <input
                type='radio'
                id='portal-choice-1'
                name='portal'
                value='summary'
              />
              <label for='portal-choice-1'>Summary</label>
            </div>

            <div>
              <input
                type='radio'
                id='portal-choice-2'
                name='portal'
                value='notecard'
              />
              <label for='portal-choice-1'>NoteCard</label>
            </div>

            <div>
              <input
                type='radio'
                id='portal-choice-2'
                name='portal'
                value='question'
              />
              <label for='portal-choice-1'>Q&amp;A</label>
            </div>
          </div>
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
    </div>
  );
};

export default Portal;
