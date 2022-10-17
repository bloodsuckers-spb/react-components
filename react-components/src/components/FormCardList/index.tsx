import React from 'react';
import FormCard from 'components/FormCard';
import { IProps } from './interfaces';

function FormCardList({ data }: IProps) {
  return (
    <ul className="card-list" role="card-list">
      {data.map((card, i) => (
        <FormCard key={i} data={card} />
      ))}
    </ul>
  );
}

export default FormCardList;
