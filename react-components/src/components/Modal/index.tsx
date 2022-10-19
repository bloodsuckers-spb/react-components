import React from 'react';
import './index.css';
import { IProps } from './interfaces';

const Modal = ({ handler, card }: IProps) => {
  const { name, image, gender, species } = card;
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <div className="modal" role="modal" onClick={handler}>
      <div className="overlay" role={'overlay'}>
        <div className="modal-window" onClick={handleClick}>
          <div className="modal-close-icon" role={'modal-close-btn'} onClick={handler}></div>
          <img className="card-img" src={image} alt={''} />
          <h4>{name}</h4>
          <p className="gender">{gender}</p>
          <p>{species}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
