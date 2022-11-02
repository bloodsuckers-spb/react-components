import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from 'components/AppRoutes';
import AppHeader from 'components/AppHeader';

import './App.css';

import AppContext from './store/AppContex';

import { routes } from './constants/routes';
import { initialState } from './store/constants';
import { cardsReducer } from './store/reducers';

const App = () => {
  const [cards, dispatchCards] = useReducer(cardsReducer, initialState);

  const value = {
    state: cards,
    dispatch: dispatchCards,
  };

  return (
    <AppContext.Provider value={value}>
      <BrowserRouter>
        <AppHeader />
        <AppRoutes routes={routes} />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
