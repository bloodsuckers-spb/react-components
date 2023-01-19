import React, { useReducer } from 'react';

import AppContext from '../../AppContex';
import { initialState } from '../../initialState';
import { cardsReducer } from '../../reducers';

import { Props } from './interfaces';

const AppProvider = ({ children }: Props) => {
  const [cards, dispatchCards] = useReducer(cardsReducer, initialState);

  const value = {
    state: cards,
    dispatch: dispatchCards,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
