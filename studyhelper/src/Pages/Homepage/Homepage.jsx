import React from 'react';
import '../Homepage/Homepage.css';
import { Cover } from '../../Components/home/Cover';
import { Body } from '../../Components/home/Body';
const Homepage = () => {
  return (
    <div className='view'>
      <Cover />
      <Body />
    </div>
  );
};

export default Homepage;
