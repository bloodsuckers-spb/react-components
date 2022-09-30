import React, { Component } from 'react';
import SearchBar from '../Search-Bar';
import Card from 'components/Card';
import './index.css';

export default class Home extends Component {
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
