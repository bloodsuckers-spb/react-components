import { Dispatch } from 'react';
import { ICaracter } from '../types';

export type InitialStateType = {
  cards: ICaracter[];
};

export type ActionType = {
  type: string;
  payload: ICaracter[];
};

export type CreateContextProps = {
  state: InitialStateType;
  dispatch: Dispatch<ActionType>;
};
