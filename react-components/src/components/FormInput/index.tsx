import React from 'react';
import './index.css';
import { IProps } from './interfaces';

const FormInput = ({ data, isError, handler }: IProps) => {
  const { id, placeholder, className, title, type, errMsg } = data;
  return (
    <fieldset>
      <legend>{title}</legend>
      <label htmlFor={id}>
        <input
          className={className}
          id={id}
          type={type}
          onChange={handler}
          autoComplete="off"
          placeholder={placeholder}
        ></input>
        <span className={className}>
          {id === 'confirm' ? 'Please confirm your personal data' : ''}
        </span>
      </label>
      <p className="error">{isError && errMsg}</p>
    </fieldset>
  );
};

export default FormInput;
