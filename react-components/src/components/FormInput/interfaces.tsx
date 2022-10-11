import IFormData from '../../types/IFormData';

export interface IProps {
  data: IFormData;
  isError: boolean;
  handler: (event: React.FormEvent<HTMLInputElement>) => void;
}
