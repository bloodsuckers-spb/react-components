import { Dispatch } from 'react';
import { ICaracter } from '../types';

export type StoreStateType = {
  cards: ICaracter[];
  currentPage: number;
  pages: number;
  name: string;
  isLoaded: boolean;
  sortingBy?: string;
};

export type ActionType = {
  type: string;
  payload: StoreStateType;
};

export type CreateContextProps = {
  state: StoreStateType;
  dispatch: Dispatch<ActionType>;
};
