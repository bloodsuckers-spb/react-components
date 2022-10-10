import React from 'react';
import SelectOption from '../SelectOption';

export enum countries {
  USA = 'USA',
  Germany = 'Germany',
  England = 'England',
  Sweden = 'Sweden',
}

interface FormSelectData {
  id: string;
  tag?: string;
  type?: string;
  title: string;
  errMsg: string;
}

export interface IProps {
  data: FormSelectData;
  isError: boolean;
  handler: (event: React.FormEvent<HTMLSelectElement>) => void;
}

const FormSelect = ({ data, isError, handler }: IProps) => {
  const { id, title, errMsg } = data;
  const selectOptions: Readonly<string[]> = Object.values(countries);
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <select id={id} onChange={handler}>
        <option value="">-- Choose country --</option>
        {selectOptions.map((country, i) => (
          <SelectOption key={i} country={country} />
        ))}
      </select>
      <p className="error">{isError && errMsg}</p>
    </>
  );
};

export default FormSelect;
