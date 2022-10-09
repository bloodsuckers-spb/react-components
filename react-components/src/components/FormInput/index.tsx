import React from 'react';

interface IProps {
  data: IPropsData;
  id: string;
  handler: (event: React.FormEvent<HTMLInputElement>) => void;
}

type TRef = React.RefObject<HTMLInputElement | HTMLSelectElement>;
type inputRef = React.RefObject<HTMLInputElement>;

interface IPropsData {
  tag?: string;
  type?: string;
  title: string;
  errMsg: string;
  isError: boolean;
  ref: TRef;
}

const FormInput = ({ data, id, handler }: IProps) => {
  const { title, type, errMsg, ref, isError } = data;
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
