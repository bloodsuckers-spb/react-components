import React from 'react';

import countriesOptions from 'constants/countryOptions';

import { IProps } from './interfaces';

const FormSelect = ({ data, isError, handler }: IProps) => {
  const { id, title, errorMessage, className } = data;
  return (
    <fieldset className={`fieldset-${className}`}>
      <legend>{title}</legend>
      <select id={id} onChange={handler}>
        {countriesOptions.map((item, i) => (
          <option key={i} value={i > 0 ? item : ''}>
            {item}
          </option>
        ))}
      </select>
      {isError && <p className="error">{errorMessage}</p>}
    </fieldset>
  );
};

export default FormSelect;
