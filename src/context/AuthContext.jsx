// df-frontend/src/context/AuthContext.js

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Add logic to set authentication state, e.g., store token in local storage
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Add logic to clear authentication state, e.g., remove token from local storage
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
