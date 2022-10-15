import { IFormData } from '../../types/index';

export interface IProps {
  data: IFormData;
  isError: boolean;
  handler: (event: React.FormEvent<HTMLSelectElement>) => void;
}
