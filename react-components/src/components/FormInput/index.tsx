import React from 'react';

interface FormItemData {
  id: string;
  type: string;
  title: string;
  ref: React.RefObject<HTMLInputElement>;
}

interface FormItemProp {
  data: FormItemData;
  errorMsg: string;
  handler: (event: React.FormEvent<HTMLInputElement>) => void;
}

const FormInput = ({ data, errorMsg, handler }: FormItemProp) => {
  const { title, id, type, ref } = data;
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input id={id} type={type} ref={ref} onChange={handler} autoComplete="off"></input>
      <p className="error">{errorMsg}</p>
    </>
  );
};

export default FormInput;
