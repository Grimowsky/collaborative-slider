import React from 'react';
import { routes } from './routes.schema';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Slider from '../pages/Slider';

export const AppRoutes = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={routes.BASE_ROUTE} element={<Login />} />
      <Route path={routes.SLIDER} element={<Slider />} />
    </Routes>
  );
};
