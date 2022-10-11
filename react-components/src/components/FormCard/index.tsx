import React from 'react';
import './index.css';
import { IProps } from './interfaces';

const FormCard = ({ data }: IProps) => {
  const { switcher, firstName, lastName, country, profilePic, bornDate } = data;
  return (
    <div className="card form-card" data-testId="form-card">
      <h3>
        {firstName} {lastName}
      </h3>
      <p>Born: {bornDate}</p>
      <p>Sex: {switcher}</p>
      <p>Country: {country}</p>
      <img src={profilePic}></img>
    </div>
  );
};

export default FormCard;
