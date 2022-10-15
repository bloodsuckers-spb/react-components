import IFormCards from '../../types/IFormCards';
import IFormData from 'types/IFormData';

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
