import React from 'react';
import FormInput from 'components/FormInput';
import FormSelect from 'components/FormSelect';
import { IProps } from './interfaces';

const FormItem = ({ data, isError, handler }: IProps) => {
  return data.tag === 'select' ? (
    <FormSelect isError={isError} data={data} handler={handler} />
  ) : (
    <FormInput isError={isError} data={data} handler={handler} />
  );
};

export default FormItem;
