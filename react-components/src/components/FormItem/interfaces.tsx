type THandler = (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => void;

interface IPropsData {
  id: string;
  tag?: string;
  type?: string;
  title: string;
  errMsg: string;
  className: string;
  placeholder: string;
}

export interface IProps {
  data: IPropsData;
  isError: boolean;
  handler: THandler;
}
