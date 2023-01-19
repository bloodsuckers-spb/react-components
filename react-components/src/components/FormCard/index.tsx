import React from 'react';

import './index.css';

import { IProps } from './interfaces';

const FormCard = ({ data: { bornDate, switcher, country, profilePic, ...rest } }: IProps) => {
  const { firstName, lastName } = rest;
  const title = `${firstName} ${lastName}`;
  return (
    <div className="card form-card" data-testid="form-card">
      <h3>{title}</h3>
      <p>Born: {bornDate}</p>
      <p>Sex: {switcher}</p>
      <p>Country: {country}</p>
      <img src={profilePic}></img>
    </div>
  );
};

export default FormCard;
