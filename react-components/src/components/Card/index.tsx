import React from 'react';
import './index.css';
import { CardProps } from './interfaces';

const Card = ({ data }: CardProps) => {
  const { name, description, img, breed } = data;
  return (
    <div className="card" role="card">
      <img className="card-img" src={img} />
      <h4>{name}</h4>
      <p className="breed">{breed}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;
