import React from 'react';
import { routes } from './routes.schema';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import { Roles } from '../types/common';
import { createUserRouter } from './User.router';

type RoutesRoles = {
  userRoles: Roles[];
};

export const ALLOWED_ROLES: RoutesRoles = {
  userRoles: ['user'],
};

export const AppRoutes = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={routes.BASE_ROUTE} element={<Login />} />
      {createUserRouter()}
    </Routes>
  );
};
