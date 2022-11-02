import { Dispatch } from 'react';
import { ICaracter } from '../types';

export type StoreStateType = {
  cards: ICaracter[];
};

export type ActionType = {
  type: string;
  payload: ICaracter[];
};

export type CreateContextProps = {
  state: StoreStateType;
  dispatch: Dispatch<ActionType>;
};
