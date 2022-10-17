import React from 'react';
import './index.css';
import { IProps } from 'components/CardList/interfaces';
import { ICaracter } from 'pages/Home/interfaces';
import { IFormCards } from 'types';
import Card from 'components/Card';
import FormCard from 'components/FormCard';

const isType = (data: ICaracter | IFormCards): data is ICaracter => {
  return 'species' in data;
};

const CardList = ({ data }: IProps) => {
  return (
    <ul className="card-list" role="card-list">
      {data.map((card, i) => (
        <li key={i}>
          {isType(card) ? <Card key={i} data={card} /> : <FormCard key={i} data={card} />}
        </li>
      ))}
    </ul>
  );
};

export default CardList;
