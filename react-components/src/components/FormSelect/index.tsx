import React from 'react';

import countriesOptions from 'constants/countryOptions';

import { IProps } from './interfaces';

const FormSelect = ({ data: { id, title, errorMessage, className }, errors }: IProps) => {
  return (
    <fieldset className={`fieldset-${className}`}>
      <legend>{title}</legend>
      <select id={id}>
        {countriesOptions.map((item, i) => (
          <option key={i} value={i > 0 ? item : ''}>
            {item}
          </option>
        ))}
      </select>
      {errors[id] && <p className="error">{errorMessage}</p>}
    </fieldset>
  );
};

export default FormSelect;
