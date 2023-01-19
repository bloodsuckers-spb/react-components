import React from 'react';

import FormCard from 'components/FormCard';

import './index.css';

import { IProps } from './interfaces';

const FormCardList = ({ data }: IProps) => {
  return (
    <ul className="card-list" role="card-list">
      {data.map((card, i) => (
        <li key={i}>
          <FormCard data={card} />
        </li>
      ))}
    </ul>
  );
};

export default FormCardList;
