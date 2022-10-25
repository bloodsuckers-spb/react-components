import React, { MouseEvent } from 'react';
import './index.css';
import { IProps } from './interfaces';

const Modal = ({ openModalHandler, card: { name, image, gender, species } }: IProps) => {
  const handleClick = (event: MouseEvent) => event.stopPropagation();
  return (
    <div className="modal" role="modal" onClick={openModalHandler}>
      <div className="overlay" role={'overlay'}>
        <div className="modal-window" onClick={handleClick}>
          <div
            className="modal-close-icon"
            role={'modal-close-btn'}
            onClick={openModalHandler}
          ></div>
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
