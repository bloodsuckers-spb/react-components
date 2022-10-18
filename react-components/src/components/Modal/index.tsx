import React from 'react';
import './index.css';
import { IProps } from './interfaces';

const Modal = ({ handler, card }: IProps) => {
  const { name, image, gender, species } = card;
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <div className="modal" onClick={handler}>
      <div className="overlay">
        <div className="modal-window" onClick={handleClick}>
          <div className="modal-close-icon" onClick={handler}></div>
          <img className="card-img" src={image} />
          <h4>{name}</h4>
          <p className="gender">{gender}</p>
          <p>{species}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
