import React from 'react';
import CollectList from '../../Components/CollectList/CollectList';
import { Button } from '../../Components/Button/Button';

import { collection } from '../../Components/CollectHelp/CollectHelp';

import './Collection.css';

const Collection = (props) => {
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

        <CollectList list={collection} />
      </div>
    </div>
  );
};

export default Collection;
