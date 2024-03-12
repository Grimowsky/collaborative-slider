import * as React from 'react';
import { AuthContext } from '../contexts/AuthProvider';

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  console.log(context);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
