import React from 'react';
import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';

export const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};
