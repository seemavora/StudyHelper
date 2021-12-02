import React, { useEffect, useRef } from 'react';

import './SearchBar.css';

const SearchBar = (prop) => {
  const search = useRef();

  useEffect(() => {
    if (prop.error) {
      search.current.value = '';
    }
  }, [prop.error]);

  return (
    <div className='search-view'>
      <form
        action='#'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          onChange={prop.textChange}
          ref={search}
          type='text'
          className={prop.error ? 'error' : ''}
          placeholder={
            prop.error ? 'Please enter valid Youtube URL' : 'Enter Link Here'
          }
        />
      </form>
    </div>
  );
};

export default SearchBar;
