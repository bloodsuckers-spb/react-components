import React from 'react';
import { FormSelectProps } from './interfaces';
import SelectOption from '../SelectOption';

export enum countries {
  USA = 'USA',
  Germany = 'Germany',
  England = 'England',
  Sweden = 'Sweden',
}

const FormSelect = ({ data, handler }: FormSelectProps) => {
  const { title, errorMsg, id, ref } = data;
  const selectOptions: Readonly<string[]> = Object.values(countries);
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <select id={id} ref={ref} onChange={handler}>
        <option value="">-- Choose country --</option>
        {selectOptions.map((country, i) => (
          <SelectOption key={i} country={country} />
        ))}
      </select>
      <p className="error">{errorMsg}</p>
    </>
  );
};

export default FormSelect;
