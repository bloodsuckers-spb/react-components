import { UseFormRegisterReturn, FieldErrorsImpl } from 'react-hook-form';

export interface IFormData {
  id: string;
  tag?: string;
  type?: string;
  title: string;
  errorMessage: string;
  className: string;
  placeholder: string;
}

export interface IFormCards {
  [key: string]: string;
}

export interface IFormItem {
  data: IFormData;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: string;
    }>
  >;
  register: (id: string, type?: string) => UseFormRegisterReturn<string>;
}
