import React from 'react';
import '../Homepage/Homepage.css';
import Cover from '../../Components/Cover/Cover';
import Body from '../../Components/Body/Body';

const Homepage = () => {
  return (
    <div className='view'>
      <Cover />
      <Body />
    </div>
  );
};

export default Homepage;
