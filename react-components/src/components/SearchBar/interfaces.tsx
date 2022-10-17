import { FormEvent } from 'react';

export interface IProps {
  handler: (e: FormEvent) => void;
}

export interface IState {
  searchValue: string;
}
