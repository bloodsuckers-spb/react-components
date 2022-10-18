import React from 'react';
import './index.css';
import { IProps } from './interfaces';

const Card = ({ data, handler, id }: IProps) => {
  const { image, name, gender, species } = data;
  return (
    <div
      className="card"
      role="card"
      onClick={() => {
        handler(id);
      }}
    >
      <img className="card-img" src={image} />
      <h4>{name}</h4>
      <p className="gender">{gender}</p>
      <p>{species}</p>
    </div>
  );
};

export default Card;
