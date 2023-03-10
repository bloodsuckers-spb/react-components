import { Dispatch } from 'react';
import { ICaracter, IFormCards } from '../types';

export type StoreStateType = {
  cards: ICaracter[];
  customCards: IFormCards[];
  currentPage: number;
  pages: number;
  name: string;
  isLoaded: boolean;
  sortingBy: string;
  isDisabled: boolean;
  isCardAdded: boolean;
};

export type ActionType = {
  type: string;
  payload: StoreStateType;
};

export type CreateContextProps = {
  state: StoreStateType;
  dispatch: Dispatch<ActionType>;
};
