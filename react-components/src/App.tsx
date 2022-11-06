import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from 'components/AppRoutes';
import AppHeader from 'components/AppHeader';

import './App.css';

import AppContext from './store/AppContex';

import { routes } from './constants/routes';
import { initialState } from './store/constants';
import { cardsReducer } from './store/reducers';

import { FormProvider, useForm } from 'react-hook-form';

const App = () => {
  const [cards, dispatchCards] = useReducer(cardsReducer, initialState);
  const methods = useForm();

  const value = {
    state: cards,
    dispatch: dispatchCards,
  };

  return (
    <AppContext.Provider value={value}>
      <FormProvider {...methods}>
        <BrowserRouter>
          <AppHeader />
          <AppRoutes routes={routes} />
        </BrowserRouter>
      </FormProvider>
    </AppContext.Provider>
  );
};

export default App;
