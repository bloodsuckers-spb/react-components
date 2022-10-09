import React from 'react';
// import { FormSelectProps } from './interfaces';
import SelectOption from '../SelectOption';

export enum countries {
  USA = 'USA',
  Germany = 'Germany',
  England = 'England',
  Sweden = 'Sweden',
}

type TRef = React.RefObject<HTMLInputElement | HTMLSelectElement>;
type selectRef = React.RefObject<HTMLSelectElement>;

interface FormSelectData {
  tag?: string;
  type?: string;
  title: string;
  errMsg: string;
  isError: boolean;
  ref: TRef;
}

export interface IProps {
  data: FormSelectData;
  id: string;
  handler: (event: React.FormEvent<HTMLSelectElement>) => void;
}

const FormSelect = ({ data, id, handler }: IProps) => {
  const { title, errMsg, ref, isError } = data;
  const selectOptions: Readonly<string[]> = Object.values(countries);
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <select id={id} ref={ref as selectRef} onChange={handler}>
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
