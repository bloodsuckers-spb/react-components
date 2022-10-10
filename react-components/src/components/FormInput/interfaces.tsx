export interface IProps {
  data: IPropsData;
  isError: boolean;
  handler: (event: React.FormEvent<HTMLInputElement>) => void;
}

interface IPropsData {
  id: string;
  tag?: string;
  type?: string;
  title: string;
  errMsg: string;
}
