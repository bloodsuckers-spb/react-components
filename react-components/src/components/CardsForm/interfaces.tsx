import { ChangeEvent } from 'react';

export interface IProps {
  getData: () => void;
}

export type TSearchBarChange = ChangeEvent<HTMLInputElement>;
