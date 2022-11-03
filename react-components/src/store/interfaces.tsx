import { Dispatch } from 'react';
import { ICaracter } from '../types';

export type StoreStateType = {
  cards: ICaracter[];
  currentPage: number;
  pages: number;
  isLoaded: boolean;
  name: string;
};

export type ActionType = {
  type: string;
  payload: {
    cards: ICaracter[];
    currentPage: number;
    pages: number;
    isLoaded: boolean;
    name: string;
  };
};

export type CreateContextProps = {
  state: StoreStateType;
  dispatch: Dispatch<ActionType>;
};
