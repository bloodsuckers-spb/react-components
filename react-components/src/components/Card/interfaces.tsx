import { ICaracter } from 'pages/Home/interfaces';

export interface IProps {
  data: ICaracter;
  handler: (a: string) => void;
}
