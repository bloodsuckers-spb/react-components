import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form action="/" method="get">
        <label htmlFor="search-bar">
          <span className="visually-hidden">Search</span>
        </label>
        <input type="text" id="search-bar" placeholder="Search" name="s" />
        <button type="submit">Search</button>
      </form>
    );
  }
}
