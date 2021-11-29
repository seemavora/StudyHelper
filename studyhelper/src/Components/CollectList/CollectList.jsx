import React from 'react';

import './CollectList.css';

const CollectList = () => {
  return (
    <div className='collList-body'>
      <div className='collList-header'>
        <p>Title</p>
        <p>Type</p>
        <p>Date Created</p>
        <p>Video Link</p>
      </div>
      <div className='collList-content'></div>
    </div>
  );
};

export default CollectList;
