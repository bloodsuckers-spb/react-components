import React from 'react';
import FormInput from 'components/FormInput';
import FormSelect from 'components/FormSelect';
import { IProps } from './interfaces';

const FormItem = (props: IProps) => {
  return props.data.tag === 'select' ? <FormSelect {...props} /> : <FormInput {...props} />;
};

export default FormItem;
