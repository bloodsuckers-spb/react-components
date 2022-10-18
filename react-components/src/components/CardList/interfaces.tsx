import { ICaracter } from 'pages/Home/interfaces';

export interface IProps {
  data: ICaracter[];
}

export interface IState {
  isModal: boolean;
  content: string;
}
