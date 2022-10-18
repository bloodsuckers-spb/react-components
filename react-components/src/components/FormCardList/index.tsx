import React from 'react';
import './index.css';
import { IProps } from './interfaces';
import FormCard from 'components/FormCard';

const FormCardList = ({ data }: IProps) => {
  return (
    <ul className="card-list" role="card-list">
      {data.map((card, i) => (
        <li key={i}>
          <FormCard key={i} data={card} />
        </li>
      ))}
    </ul>
  );
};

export default FormCardList;