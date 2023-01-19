import SortingService from '../services/SortingService';

import { StoreStateType, ActionType } from './interfaces';

export const cardsReducer = (state: StoreStateType, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case 'loading':
      const { cards, currentPage, pages, sortingBy } = payload;
      if (sortingBy === 'By date') cards.sort(SortingService.sortingByDate);
      if (sortingBy === 'By reverse-name') cards.sort(SortingService.sortingByNameReverse);
      return { ...state, cards, currentPage, pages, isLoaded: true };
    case 'changeOptions':
      const { name } = payload;
      return { ...state, name };
    case 'selectSorting':
      const array = [...state.cards];
      if (payload.sortingBy === 'By name') array.sort(SortingService.sortingByName);
      if (payload.sortingBy === 'By date') array.sort(SortingService.sortingByDate);
      if (payload.sortingBy === 'By reverse-name') array.sort(SortingService.sortingByNameReverse);
      return { ...state, cards: array, sortingBy: payload.sortingBy };
    case 'addCards':
      const { customCards } = payload;
      return { ...state, customCards };
    case 'setBtnState':
      const { isDisabled } = payload;
      return { ...state, isDisabled };
    case 'setCardState':
      const { isCardAdded } = payload;
      return { ...state, isCardAdded };
    case 'updateFormState':
      return { ...state, isCardAdded: payload.isCardAdded, isDisabled: payload.isDisabled };
    default:
      return { ...state };
  }
};
