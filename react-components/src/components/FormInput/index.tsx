import React from 'react';
import './index.css';

interface IProps {
  data: IPropsData;
  isError: boolean;
  handler: (event: React.FormEvent<HTMLInputElement>) => void;
}

interface IPropsData {
  id: string;
  tag?: string;
  type?: string;
  title: string;
  errMsg: string;
}

const FormInput = ({ data, isError, handler }: IProps) => {
  const { id, title, type, errMsg } = data;
  return (
    <fieldset>
      <legend>{title}</legend>
      <input id={id} type={type} onChange={handler} autoComplete="off"></input>
      <label className="error" htmlFor={id}>
        {isError && errMsg}
      </label>
      {/* <p className="error">{isError && errMsg}</p> */}
    </fieldset>
  );
};

export default FormInput;
