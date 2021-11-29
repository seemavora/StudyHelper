import React from 'react';
import { Button } from '../../Components/Button/Button';
import Plus from '../../static/img/cardnquestions/plus.png';

import './NoteCard.css';

const NoteCard = () => {
  return (
    <div className='notes-body'>
      <div className='notes-wrapper'>
        <div className='notes-save-btn'>
          <Button children='Save' />
        </div>
        <div className='notes-content'>
          <div className='notes-header'>
            <p className='notes-header-title'>CMPE 133 Final Test Bank</p>
            <div className='notes-header-add'>
              <p>Add New</p>
              <img src={Plus} alt='add' />
            </div>
          </div>
          <div className='notes-cards'></div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
