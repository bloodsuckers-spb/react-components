import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'components/Card';

import './index.css';

import { Props } from './interfaces';

const CardList = ({ data, isLoaded }: Props) => {
  const message = isLoaded ? 'Sorry, There is nothing found' : '';
  return (
    <ul className="card-list" role="card-list">
      {!data.length
        ? message
        : data.map((card, i) => (
            <li key={i}>
              <Link className="link" to="character" state={card}>
                <Card data={card} />
              </Link>
            </li>
          ))}
    </ul>
  );
};

export default CardList;
