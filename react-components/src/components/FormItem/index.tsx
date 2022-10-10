import React from 'react';
import FormInput from 'components/FormInput';
import FormSelect from 'components/FormSelect';

type THandler = (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => void;

interface IProps {
  data: IPropsData;
  isError: boolean;
  handler: THandler;
}

interface IPropsData {
  id: string;
  tag?: string;
  type?: string;
  title: string;
  errMsg: string;
}

const FormItem = ({ data, isError, handler }: IProps) => {
  const { tag } = data;
  return !tag ? (
    <FormInput isError={isError} data={data} handler={handler} />
  ) : (
    <FormSelect isError={isError} data={data} handler={handler} />
  );
};

export default FormItem;
