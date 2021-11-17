import React from 'react';

import './SearchBar.css';

const SearchBar = (prop) => {
  return (
    <div className='search-view'>
      <form action='#' onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={prop.textChange}
          type='text'
          placeholder='Enter Link Here'
        />
      </form>
    </div>
  );
};

export default SearchBar;
