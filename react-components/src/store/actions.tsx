import { initialState } from './initialState';

import { ICaracter, IFormCards } from '../types';
import { FormState } from '../store/interfaces';

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

export const addCards = (customCards: IFormCards[]) => ({
  type: 'addCards',
  payload: {
    ...initialState,
    customCards,
  },
});

export const updateFormState = (formState: FormState) => ({
  type: 'updateForm',
  payload: {
    ...initialState,
    formState,
  },
});
