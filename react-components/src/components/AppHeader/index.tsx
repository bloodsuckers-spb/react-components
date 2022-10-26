import React from 'react';

import Navigation from '../Navigation';

import './index.css';

const AppHeader = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
