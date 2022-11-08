import { initialState } from './initialState';

import { ICaracter, IFormCards } from '../types';

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

export const setBtnState = (value: boolean) => ({
  type: 'setBtnState',
  payload: {
    ...initialState,
    isDisabled: value,
  },
});

export const setCardState = (value: boolean) => ({
  type: 'setCardState',
  payload: {
    ...initialState,
    isCardAdded: value,
  },
});

export const updateFormState = (cardStatus: boolean, btnStatus: boolean) => ({
  type: 'updateFormState',
  payload: {
    ...initialState,
    isCardAdded: cardStatus,
    isDisabled: btnStatus,
  },
});
