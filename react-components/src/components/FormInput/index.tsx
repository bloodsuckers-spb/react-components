import React from 'react';

import './index.css';

import { IProps } from './interfaces';

const FormInput = ({ data, isError, handler }: IProps) => {
  const { id, placeholder, className, title, type, errorMessage } = data;
  return (
    <fieldset className={`fieldset-${className}`}>
      <legend>{title}</legend>
      <label htmlFor={id}>
        <input
          className={className}
          id={id}
          type={type}
          onChange={handler}
          autoComplete="off"
          placeholder={placeholder}
        />
        {type === 'checkbox' && (
          <span className={className}>
            {id === 'confirm' && 'Please confirm your personal data'}
          </span>
        )}
      </label>
      {isError && <p className="error">{errorMessage}</p>}
    </fieldset>
  );
};

export default FormInput;
