export enum countries {
  USA = 'USA',
  Germany = 'Germany',
  England = 'England',
  Sweden = 'Sweden',
}

interface FormSelectData {
  id: string;
  tag?: string;
  type?: string;
  title: string;
  errMsg: string;
}

export interface IProps {
  data: FormSelectData;
  isError: boolean;
  handler: (event: React.FormEvent<HTMLSelectElement>) => void;
}
