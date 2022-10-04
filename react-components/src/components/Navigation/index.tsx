import React from 'react';
import './index.css';
import { navLinkData } from 'constants/navLinkData';
import NavItem from 'components/NavItem';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        {navLinkData.map((data, i) => (
          <NavItem key={i} data={data} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
