import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from 'components/AppRoutes';
import AppHeader from 'components/AppHeader';

import { routes } from './constants/routes';

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <AppRoutes routes={routes} />
    </BrowserRouter>
  );
}

export default App;
