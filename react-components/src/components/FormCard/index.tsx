import React from 'react';

import { ICards } from 'pages/Forms/interfaces';

interface FormCardProps {
  data: ICards;
}

const FormCard = ({ data }: FormCardProps) => {
  const { firstName, lastName, country } = data;
  return (
    <div className="card">
      <h3>{firstName}</h3>
      <h4>{lastName}</h4>
      <p>{country}</p>
    </div>
  );
};

export default FormCard;
