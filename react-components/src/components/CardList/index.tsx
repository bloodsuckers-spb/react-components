import React from 'react';
import { IProps } from 'components/CardList/interfaces';
import FormCard from 'components/FormCard';

const CardList = ({ cards }: IProps) => {
  return (
    <ul className="card-list">
      {cards.map((card, i) => (
        <li key={i}>
          <FormCard key={i} data={card} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
