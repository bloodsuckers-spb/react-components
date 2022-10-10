import React from 'react';

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
    <>
      <label htmlFor={id}>{title}</label>
      <input id={id} type={type} onChange={handler} autoComplete="off"></input>
      <p className="error">{isError && errMsg}</p>
    </>
  );
};

export default FormInput;
