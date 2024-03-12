import * as React from 'react';

type AuthContextType = {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  isAuthenticated: boolean;
  logout: () => void;
};

export const AuthContext = React.createContext({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, logout, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
