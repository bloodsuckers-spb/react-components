import React from 'react';

import { ICards } from 'pages/Forms/interfaces';

interface FormCardProps {
  data: ICards;
}

const FormCard = ({ data }: FormCardProps) => {
  const { switcher, firstName, lastName, country, profilePic, bornDate } = data;
  console.log(data);
  return (
    <div className="card">
      <h3>{firstName}</h3>
      <h4>{lastName}</h4>
      <p>{bornDate}</p>
      <p>{switcher}</p>
      <p>{country}</p>
      <img src={profilePic}></img>
    </div>
  );
};

export default FormCard;
