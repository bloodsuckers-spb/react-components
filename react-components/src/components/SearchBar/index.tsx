import React, { Component } from 'react';
import { SearchBarProps, SearchBarState } from './interfaces';

export default class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
    };
  }

  componentWillUnmount() {
    const { searchValue } = this.state;
    localStorage.setItem('searchValue', searchValue);
  }

  handleClick = () => {
    const { searchValue } = this.state;
    localStorage.setItem('searchValue', searchValue);
  };

  render() {
    const { searchValue } = this.state;
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      this.setState({ searchValue: value });
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
          autoComplete="off"
          autoFocus={true}
          value={searchValue}
          onChange={onChangeHandler}
        />
        <button type="button" onClick={this.handleClick}>
          Search
        </button>
      </form>
    );
  }
}
