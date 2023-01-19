import React from 'react';
import Home from 'pages/Home';
import AboutUs from 'pages/AboutUs';
import NoPage from 'pages/NoPage';
import Forms from 'pages/Forms';
import Character from 'pages/Character';

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
    path: 'forms',
    element: <Forms />,
  },
  {
    path: '*',
    element: <NoPage />,
  },
  {
    path: 'character',
    element: <Character />,
  },
];
