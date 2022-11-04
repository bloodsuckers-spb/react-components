import { StoreStateType, ActionType } from './interfaces';

export const cardsReducer = (state: StoreStateType, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case 'loading':
      const { cards, currentPage, pages } = payload;
      return { ...state, cards, currentPage, pages, isLoaded: true };
    case 'changeOptions':
      const { name } = payload;
      return { ...state, name };
    case 'selectSorting':
      const { sortingBy } = payload;
      return { ...state, sortingBy };
    default:
      return { ...state };
  }
};
