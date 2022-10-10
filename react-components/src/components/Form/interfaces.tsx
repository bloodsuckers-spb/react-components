import { ICards } from 'pages/Forms/interfaces';

export enum countries {
  USA = 'USA',
  Germany = 'Germany',
  England = 'England',
  Sweden = 'Sweden',
}

export interface IProps {
  fn: (data: ICards) => void;
}

export interface IState {
  isDisabled: boolean;
  errors: IErrors;
}

export interface IErrors {
  [key: string]: boolean;
}

export type ErrorsKey = keyof IErrors;

export interface TextInputProp {
  content: string;
  id: ErrorsKey;
}

export type refInput = React.RefObject<HTMLInputElement>;
export type refSelect = React.RefObject<HTMLSelectElement>;
