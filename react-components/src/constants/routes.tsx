import React from 'react';
import Home from 'pages/Home';
import AboutUs from 'pages/AboutUs';
import NoPage from 'pages/NoPage';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <AboutUs />,
  },
  {
    path: '*',
    element: <NoPage />,
  },
];
