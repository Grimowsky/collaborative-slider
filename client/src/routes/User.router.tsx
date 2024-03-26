import { routes } from './routes.schema';
import SliderForm from '../pages/SliderForm';
import React from 'react';
import { Route } from 'react-router-dom';
import { RoleProtectedRoute } from './RoleProtected.route';
import { ALLOWED_ROLES } from './AppRoutes';

export const createUserRouter = () => {
  return (
    <>
      <Route
        path={routes.SLIDER}
        element={
          <RoleProtectedRoute allowedRoles={ALLOWED_ROLES.userRoles}>
            <SliderForm />
          </RoleProtectedRoute>
        }
      />
    </>
  );
};
