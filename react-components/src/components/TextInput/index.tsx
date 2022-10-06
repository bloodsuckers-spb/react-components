import React from 'react';

interface textInputProp {
  content: string;
  id: string;
}

interface TextInputProps {
  data: textInputProp;
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
