import React from 'react';
import './index.css';
import { IProps } from 'components/CardList/interfaces';
import Card from 'components/Card';

function CardList({ data }: IProps) {
  return (
    <ul className="card-list" role="card-list">
      {data.map((card, i) => (
        <li key={i}>
          <Card key={i} data={card} />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
