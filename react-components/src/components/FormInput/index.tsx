import React from 'react';

import './index.css';

import { IFormItem } from '../../types';

const FormInput = ({ data, errors, register }: IFormItem) => {
  const { id, placeholder, className, title, type, errorMessage } = data;
  const confirmMessage = 'Please confirm your personal data';
  return (
    <fieldset className={`fieldset-${className}`}>
      <legend>{title}</legend>
      <label htmlFor={id}>
        <input
          className={className}
          id={id}
          type={type}
          autoComplete="off"
          placeholder={placeholder}
          {...register(id, type)}
        />
        {type === 'checkbox' && (
          <span className={className}>{id === 'confirm' && confirmMessage}</span>
        )}
      </label>
      {errors[id] && <p className="error">{errorMessage}</p>}
    </fieldset>
  );
};

export default FormInput;
