import React from 'react';

import FormInput from 'components/FormInput';
import FormSelect from 'components/FormSelect';

import { IFormItem } from '../../types/';

const FormItem = (props: IFormItem) => {
  return props.data.tag === 'select' ? <FormSelect {...props} /> : <FormInput {...props} />;
};

export default FormItem;
