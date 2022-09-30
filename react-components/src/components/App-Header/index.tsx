import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <nav className="header-nav">
              <ul className="nav-list">
                <li>
                  <Link to="/" className="nav__link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="nav__link">
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
