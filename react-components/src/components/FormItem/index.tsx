import React from 'react';
import FormInput from 'components/FormInput';
import FormSelect from 'components/FormSelect';
import { IProps } from './interfaces';

const FormItem = ({ data, isError, handler }: IProps) => {
  const { tag } = data;
  return !tag ? (
    <FormInput isError={isError} data={data} handler={handler} />
  ) : (
    <FormSelect isError={isError} data={data} handler={handler} />
  );
};

export default FormItem;
