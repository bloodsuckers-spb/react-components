import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import { Props } from './interfaces';

const Card = ({ data: { image, name, gender, species }, id }: Props) => {
  return (
    <Link to="character" state={{ id }}>
      <div className="card" role="card">
        <img className="card-img" src={image} />
        <h4>{name}</h4>
        <p className="gender">{gender}</p>
        <p>{species}</p>
      </div>
    </Link>
  );
};

export default Card;
