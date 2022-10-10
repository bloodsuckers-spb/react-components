import React from 'react';

interface IProps {
  data: IPropsData;
  id: string;
  isError: boolean;
  handler: (event: React.FormEvent<HTMLInputElement>) => void;
}

type TRef = React.RefObject<HTMLInputElement | HTMLSelectElement>;
type inputRef = React.RefObject<HTMLInputElement>;

interface IPropsData {
  tag?: string;
  type?: string;
  title: string;
  errMsg: string;
  ref: TRef;
}

const FormInput = ({ data, id, isError, handler }: IProps) => {
  const { title, type, errMsg, ref } = data;
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        type={type}
        ref={ref as inputRef}
        onChange={handler}
        autoComplete="off"
      ></input>
      <p className="error">{isError && errMsg}</p>
    </>
  );
};

export default FormInput;
