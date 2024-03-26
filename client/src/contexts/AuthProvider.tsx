import * as React from 'react';
import Cookies from 'js-cookie';
import { AUTH_KEY_MAPPINGS } from '../utils/keyMappings';
import { Roles, SetState } from '../types/common';

type AuthContextType = {
  loggedIn: boolean;
  setLoggedIn: SetState<boolean>;
  role: Roles;
};

export const AuthContext = React.createContext({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  //TODO change this after receiving the role from the backend
  const role = 'user';

  React.useLayoutEffect(() => {
    if (Cookies.get(AUTH_KEY_MAPPINGS.AUTH_TOKEN)) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, role }}>
      {children}
    </AuthContext.Provider>
  );
};
