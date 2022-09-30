import React, { Component } from 'react';
import SearchBar from '../Search-Bar';
import Card from 'components/Card';
import './index.css';
import LocalStorageService from 'utils/LocalStorageService';

export default class Home extends Component {
  componentWillUnmount() {}

  render() {
    return (
      <main className="main">
        <SearchBar />
        <div className="cards-wrapper">
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    );
  }
}
