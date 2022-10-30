import { IFormData } from '../../types/index';
import { UseFormRegisterReturn, FieldErrorsImpl } from 'react-hook-form';

export interface IProps {
  data: IFormData;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: string;
    }>
  >;
  register: (id: string, type?: string) => UseFormRegisterReturn<string>;
}
