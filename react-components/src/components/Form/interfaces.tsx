import { ICards } from 'pages/Forms/interfaces';

export interface IProps {
  fn: (data: ICards) => void;
  data: IDataItem[];
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

export type TFormEvent = React.FormEvent<HTMLInputElement | HTMLSelectElement>;

export interface IDataItem {
  id: string;
  tag?: string;
  type?: string;
  title: string;
  errMsg: string;
  className: string;
  placeholder: string;
}

export interface IData {
  [key: string]: IDataItem;
}
