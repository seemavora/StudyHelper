import React, { useState } from 'react';
import CollectList from '../../Components/CollectList/CollectList';
import { Button } from '../../Components/Button/Button';
import { useHistory } from 'react-router-dom';

import './Collection.css';

const Collection = (props) => {
  const history = useHistory();

  const collectPopup = () => {
    history.push('/');
  };

  return (
    <div className='collect-body'>
      <div className='collect-body-wrapper'>
        <div className='collect-top'>
          <div className='collect-title'>Collection</div>
          <div className='collect-add-button'>
            <a href='/Portal'>
              <Button children={'Summary'} />
            </a>
            <a href='/NoteCard'>
              <Button children={'Note Card'} />
            </a>
            <a href='/Questions'>
              <Button children={'Q&A'} />
            </a>
          </div>
        </div>

        <CollectList />
      </div>
    </div>
  );
};

export default Collection;
