import React from 'react';
import { useLocation } from 'react-router-dom';

import './index.css';

import Navigation from '../Navigation';

const AppHeader = () => {
  const { state } = useLocation();
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          {state ? <h1 className="title">{state.name}</h1> : <Navigation />}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
