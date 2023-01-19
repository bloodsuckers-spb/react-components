import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Props } from './interfaces';

export const AppFormProvider = ({ children }: Props) => {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
};
