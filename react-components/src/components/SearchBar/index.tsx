import React, { useState, useEffect } from 'react';

import './index.css';

import { IProps, TSearchBarChange } from './interfaces';

const SearchBar = ({ handleSearch }: IProps) => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    localStorage.setItem('searchValue', searchValue);
  }, [searchValue]);

  const handleChange = ({ target }: TSearchBarChange) => setSearchValue(target.value);

  return (
    <form id="search-form" action="/" method="get" onSubmit={handleSearch}>
      <label htmlFor="search-bar">
        <span className="visually-hidden">Search</span>
      </label>
      <input
        type="text"
        id="search-bar"
        placeholder="Search"
        autoComplete="off"
        autoFocus={true}
        value={searchValue}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
