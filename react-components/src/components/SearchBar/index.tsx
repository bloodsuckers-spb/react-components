import React, { Component } from 'react';
import './index.css';
import { IProps, IState } from './interfaces';

export default class SearchBar extends Component<IProps, IState> {
  handleSubmit;
  constructor(props: IProps) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
    };
    this.handleSubmit = props.handler;
  }

  componentWillUnmount() {
    const { searchValue } = this.state;
    localStorage.setItem('searchValue', searchValue);
  }

  render() {
    const { searchValue } = this.state;
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      this.setState({ searchValue: value });
    };
    return (
      <form id="search-form" action="/" method="get" onSubmit={this.handleSubmit}>
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
        <button type="submit">Search</button>
      </form>
    );
  }
}
