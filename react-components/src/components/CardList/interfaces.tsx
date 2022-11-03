import { ICaracter } from 'pages/Home/interfaces';

export interface IProps {
  data: ICaracter[];
  isLoaded: boolean;
}

export type TCardId = number | null;
