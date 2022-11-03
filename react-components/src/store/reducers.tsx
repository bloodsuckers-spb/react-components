import { StoreStateType, ActionType } from './interfaces';

export const cardsReducer = (state: StoreStateType, action: ActionType) => {
  switch (action.type) {
    case 'loading':
      const { cards, currentPage, pages } = action.payload;
      return { ...state, cards: cards, currentPage: currentPage, pages: pages, isLoaded: true };
    case 'sorting':
      return { ...state };
    default:
      return { ...state };
  }
};
