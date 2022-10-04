import React from 'react';
import SearchBar from '../../components/SearchBar';
import Card from 'components/Card';
import './index.css';
import { data } from '../../constants/data';

const Home = () => {
  return (
    <main className="main">
      <SearchBar />
      <ul className="cards" role="cards-list">
        {data.map((data, i) => (
          <li key={i}>{<Card data={data} />}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
