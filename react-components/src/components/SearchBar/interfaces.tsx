import { FormEvent, ChangeEvent } from 'react';

export interface IProps {
  handleSearch: (e: FormEvent) => void;
}

export type TSearchBarChange = ChangeEvent<HTMLInputElement>;
