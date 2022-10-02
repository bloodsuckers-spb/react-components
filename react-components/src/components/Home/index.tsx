import React from 'react';
import SearchBar from '../Search-Bar';
import Card from 'components/Card';
import './index.css';

const Home = () => {
  const array = Array(5).fill(<Card />);
  return (
    <main className="main">
      <SearchBar />
      <ul className="cards" role="cards-list">
        {array.map((card, i) => (
          <li key={i}>{card}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
