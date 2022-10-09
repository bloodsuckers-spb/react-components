import { ICards } from 'pages/Forms/interfaces';

export enum countries {
  USA = 'USA',
  Germany = 'Germany',
  England = 'England',
  Sweden = 'Sweden',
}

export interface FormProps {
  fn: (data: ICards) => void;
}

export interface IErrors {
  [key: string]: string;
}

export type ErrorsKey = keyof IErrors;

export interface TextInputProp {
  content: string;
  id: ErrorsKey;
}

export interface FormState {
  isDisabled: boolean;
}

export type refInput = React.RefObject<HTMLInputElement>;
export type refSelect = React.RefObject<HTMLSelectElement>;
