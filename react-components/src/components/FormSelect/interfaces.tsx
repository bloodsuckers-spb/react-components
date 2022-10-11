import IFormData from '../../types/IFormData';

export enum countries {
  USA = 'USA',
  Germany = 'Germany',
  England = 'England',
  Sweden = 'Sweden',
}

export interface IProps {
  data: IFormData;
  isError: boolean;
  handler: (event: React.FormEvent<HTMLSelectElement>) => void;
}
