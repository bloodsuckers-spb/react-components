import React from 'react';
import SelectOption from '../SelectOption';
import { countries, IProps } from './interfaces';

const FormSelect = ({ data, isError, handler }: IProps) => {
  const { id, title, errorMessage, className } = data;
  const selectOptions: Readonly<string[]> = Object.values(countries);
  return (
    <fieldset className={`fieldset-${className}`}>
      <legend>{title}</legend>
      <select id={id} onChange={handler}>
        <option value="">-- Choose country --</option>
        {selectOptions.map((country, i) => (
          <SelectOption key={i} country={country} />
        ))}
      </select>
      {isError && <p className="error">{errorMessage}</p>}
    </fieldset>
  );
};

export default FormSelect;
