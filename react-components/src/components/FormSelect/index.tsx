import React from 'react';

import countriesOptions from 'constants/countryOptions';

import { IFormItem } from '../../types/';

const FormSelect = ({
  data: { id, title, errorMessage, className },
  errors,
  register,
}: IFormItem) => {
  return (
    <fieldset className={`fieldset-${className}`}>
      <legend>{title}</legend>
      <select id={id} {...register(id)}>
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
