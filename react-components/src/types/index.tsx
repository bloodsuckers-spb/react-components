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

export interface ICaracter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type TimeStamp = string | number;
