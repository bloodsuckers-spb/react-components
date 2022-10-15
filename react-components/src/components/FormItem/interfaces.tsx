import { IFormData } from '../../types/index';

type THandler = (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => void;

export interface IProps {
  data: IFormData;
  isError: boolean;
  handler: THandler;
}
