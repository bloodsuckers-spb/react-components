import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from 'components/AppRoutes';
import AppHeader from 'components/AppHeader';

import './App.css';

import { routes } from './constants/routes';

const App = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      <AppRoutes routes={routes} />
    </BrowserRouter>
  );
};

export default App;
