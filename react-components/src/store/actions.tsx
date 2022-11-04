import { initialState } from './constants';

import { ICaracter } from '../types';

export const selectSorting = (value: string) => ({
  type: 'selectSorting',
  payload: {
    ...initialState,
    sortingBy: value,
  },
});

export const changeOptions = (value: string) => ({
  type: 'changeOptions',
  payload: {
    ...initialState,
    name: value,
  },
});

export const load = (cards: ICaracter[] = [], pages = 0, currentPage = 0, sortingBy = '') => ({
  type: 'loading',
  payload: {
    ...initialState,
    cards,
    pages,
    currentPage,
    sortingBy,
    isLoaded: true,
  },
});
