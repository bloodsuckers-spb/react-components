import { IFormData } from '../../types/index';
import { UseFormRegisterReturn, FieldErrorsImpl } from 'react-hook-form';

export interface IProps {
  data: IFormData;
  register: (id: string, type?: string) => UseFormRegisterReturn<string>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: string;
    }>
  >;
}
