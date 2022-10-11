import IFormData from '../../types/IFormData';

type THandler = (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => void;

export interface IProps {
  data: IFormData;
  isError: boolean;
  handler: THandler;
}
