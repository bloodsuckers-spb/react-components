import React from 'react';
import SelectOption from '../SelectOption';
import { countries } from './interfaces';
import { IProps } from './interfaces';

const FormSelect = ({ data, isError, handler }: IProps) => {
  const { id, title, errMsg } = data;
  const selectOptions: Readonly<string[]> = Object.values(countries);
  return (
    <fieldset>
      <legend>{title}</legend>
      <select id={id} onChange={handler}>
        <option value="">-- Choose country --</option>
        {selectOptions.map((country, i) => (
          <SelectOption key={i} country={country} />
        ))}
      </select>
      <label className="error" htmlFor={id}>
        {isError && errMsg}
      </label>
    </fieldset>
  );
};

export default FormSelect;
