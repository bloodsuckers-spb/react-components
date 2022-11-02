import { StoreStateType, ActionType } from './interfaces';

export const cardsReducer = (state: StoreStateType, action: ActionType) => {
  switch (action.type) {
    case 'loading':
      return { ...state, cards: action.payload };
    case 'sorting':
      return { ...state };
    case 'pagination':
      return { ...state };
    default:
      return { ...state };
  }
};
