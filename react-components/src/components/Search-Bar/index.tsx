import React, { Component } from 'react';
import LocalStorageService from 'utils/LocalStorageService';

import { SearchBarProps } from 'types/SearchBarProps';
import SearchBarState from 'types/SearchBarState';

export default class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchValue: LocalStorageService.getItem('searchValue') || '',
    };
  }

  componentWillUnmount() {
    const { searchValue } = this.state;
    LocalStorageService.setItem('searchValue', searchValue);
  }

  render() {
    const { searchValue } = this.state;
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      this.setState({ searchValue: value });
    };
    const submitHandler = (e: React.SyntheticEvent) => {
      e.preventDefault();
    };
    return (
      <form action="/" method="get">
        <label htmlFor="search-bar">
          <span className="visually-hidden">Search</span>
        </label>
        <input
          type="text"
          id="search-bar"
          placeholder="Search"
          value={searchValue}
          onChange={onChangeHandler}
        />
        <button type="submit" onClick={submitHandler}>
          Search
        </button>
      </form>
    );
  }
}
