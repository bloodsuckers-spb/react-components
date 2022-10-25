import React from 'react';
import './index.css';
import { IProps } from './interfaces';

const Card = ({ data: { image, name, gender, species }, handler, id }: IProps) => {
  const handleClick = () => handler(id);
  return (
    <div className="card" onClick={handleClick} role="card">
      <img className="card-img" src={image} />
      <h4>{name}</h4>
      <p className="gender">{gender}</p>
      <p>{species}</p>
    </div>
  );
};

export default Card;
