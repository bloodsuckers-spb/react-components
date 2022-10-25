import { ICaracter } from 'pages/Home/interfaces';

export interface IProps {
  data: ICaracter[];
}

export interface IState {
  isModalOpen: boolean;
  cardId: number | null;
}
