import { ICaracter } from 'pages/Home/interfaces';

export interface IProps {
  data: ICaracter;
  id: number;
  handler: (id: number) => void;
}
