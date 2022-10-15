import { IFormCards } from '../../types/index';
import { IFormData } from '../../types/index';

export interface IProps {
  addCard: (data: IFormCards) => void;
  data: IFormData[];
}

export interface IState {
  isDisabled: boolean;
  errors: IErrors;
}

export interface IErrors {
  [key: string]: boolean;
}

export type TFormEvent = React.FormEvent<HTMLInputElement | HTMLSelectElement>;
