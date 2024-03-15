import React from 'react';
import { Navigate } from 'react-router-dom';
import { routes } from './routes.schema';
import { Roles } from '../types/common';
import { useAuth } from '../hooks/useAuth';

type RoleProtectedRouteProps = {
  children: React.ReactNode;
  allowedRoles: Roles[];
  noAccessPath?: string;
};

export const RoleProtectedRoute = (
  props: RoleProtectedRouteProps,
): React.ReactElement => {
  const { children, allowedRoles, noAccessPath = routes.BASE_ROUTE } = props;
  const { role } = useAuth();
  const hasAccess = allowedRoles.includes(role);

  if (!hasAccess) {
    return <Navigate to={noAccessPath} replace />;
  }

  return <>{children}</>;
};
