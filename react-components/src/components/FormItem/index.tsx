import React from 'react';
import FormInput from 'components/FormInput';
import FormSelect from 'components/FormSelect';

type TRef = React.RefObject<HTMLInputElement | HTMLSelectElement>;
type THandler = (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => void;

interface IProps {
  data: IPropsData;
  id: string;
  handler: THandler;
}

interface IPropsData {
  tag?: string;
  type?: string;
  title: string;
  errMsg: string;
  isError: boolean;
  ref: TRef;
}

const FormItem = ({ data, id, handler }: IProps) => {
  const { tag } = data;
  return !tag ? (
    <FormInput id={id} data={data} handler={handler} />
  ) : (
    <FormSelect id={id} data={data} handler={handler} />
  );
};

export default FormItem;
