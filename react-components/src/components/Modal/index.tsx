import React from 'react';
import './index.css';
import { IProps } from './interfaces';

const Modal = ({ handler, content }: IProps) => {
  return (
    <div className="modal" onClick={handler}>
      <div className="overlay">
        <div className="modal-window">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
