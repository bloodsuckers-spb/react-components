import React from 'react';

interface FormItemData {
  id: string;
  type: string;
  errorMsg: string;
  title: string;
  ref: React.RefObject<HTMLInputElement>;
}

interface FormItemProp {
  data: FormItemData;
  handler: (event: React.FormEvent<HTMLInputElement>) => void;
}

const FormInput = ({ data, handler }: FormItemProp) => {
  const { title, errorMsg, id, type, ref } = data;
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input id={id} type={type} ref={ref} onChange={handler} autoComplete="off"></input>
      <p>{errorMsg}</p>
    </>
  );
};

export default FormInput;
