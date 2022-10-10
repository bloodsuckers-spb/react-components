import { ICards } from 'pages/Forms/interfaces';

export interface IProps {
  fn: (data: ICards) => void;
}

export interface IState {
  isDisabled: boolean;
  errors: IErrors;
}

export interface IFormData {
  [key: string]: string;
}

export interface IErrors {
  [key: string]: boolean;
}

export type TRef = React.RefObject<HTMLInputElement | HTMLSelectElement>;
export type TFormEvent = React.FormEvent<HTMLInputElement | HTMLSelectElement>;

export interface IDataItem {
  tag?: string;
  type?: string;
  title: string;
  errMsg: string;
  ref: TRef;
}

export interface IData {
  [key: string]: IDataItem;
}

// --------------

export type ErrorsKey = keyof IErrors;

export interface TextInputProp {
  content: string;
  id: ErrorsKey;
}

// export type refInput = React.RefObject<HTMLInputElement>;
// export type refSelect = React.RefObject<HTMLSelectElement>;

// export enum countries {
//   USA = 'USA',
//   Germany = 'Germany',
//   England = 'England',
//   Sweden = 'Sweden',
// }
