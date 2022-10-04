import React from 'react';
import './index.css';

import Navigation from '../Navigation';

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
