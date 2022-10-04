import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutesProps from './interface';

const AppRoutes = ({ routes }: AppRoutesProps) => {
  return (
    <Routes>
      {routes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
