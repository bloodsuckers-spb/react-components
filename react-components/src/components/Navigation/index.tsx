import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

import INavData from 'types/INavData';

const Navigation = () => {
  const setNavDataStatus = (navData: INavData) => `nav__link ${navData.isActive && ' active'}`;
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <NavLink end to="/" className={setNavDataStatus}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={setNavDataStatus}>
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
