import React from 'react';

import { TextInputProp } from '../Form/interfaces';

interface TextInputProps {
  data: TextInputProp;
  refer: React.RefObject<HTMLInputElement>;
  error: string;
  fn: (event: React.FormEvent<HTMLInputElement>) => void;
}

const TextInput = ({ data, error, refer, fn }: TextInputProps) => {
  const { content, id } = data;
  const options = {
    type: 'text',
    autoComplete: 'off',
  };
  return (
    <>
      <label htmlFor={id}>{content}</label>
      <input {...options} id={id} ref={refer} onChange={fn} />
      <p className="error">{error}</p>
    </>
  );
};

export default TextInput;
