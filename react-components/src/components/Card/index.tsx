import React from 'react';

import './index.css';

import { Props } from './interfaces';

const Card = ({ data: { image, name, gender, species } }: Props) => {
  return (
    <div className="card" role="card">
      <img className="card-img" src={image} />
      <h4>{name}</h4>
      <p className="gender">{gender}</p>
      <p>{species}</p>
    </div>
  );
};

export default Card;
