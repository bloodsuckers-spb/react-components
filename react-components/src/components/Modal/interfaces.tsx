import { ICaracter } from 'pages/Home/interfaces';

export interface IProps {
  handler: () => void;
  card: ICaracter;
}
