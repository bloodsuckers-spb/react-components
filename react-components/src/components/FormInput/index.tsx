import React from 'react';
import './index.css';
import { IProps } from './interfaces';

const FormInput = ({ data, isError, handler }: IProps) => {
  const { id, title, type, errMsg } = data;
  return (
    <fieldset>
      <legend>{title}</legend>
      <input id={id} type={type} onChange={handler} autoComplete="off"></input>
      <span className="confirmation">
        {type === 'checkbox' ? 'Please confirm your personal data' : ''}
      </span>
      <label className="error" htmlFor={id}>
        {isError && errMsg}
      </label>
    </fieldset>
  );
};

export default FormInput;
