import { IFormCards } from '../../types/index';
import { IFormData } from '../../types/index';

export interface IProps {
  addCard: (data: IFormCards) => void;
  data: IFormData[];
}

export type TimeStamp = string | number;

export interface IFormItems {
  [key: string]: string;
}

export interface ISubmit {
  [key: string]: string | FileList;
}
