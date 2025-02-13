import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [lastLoginTime, setLastLoginTime] = useState(() => {
    const stored = localStorage.getItem('lastLoginTime');
    return stored ? parseInt(stored) : null;
  });

  const login = () => {
    const currentTime = Date.now();
    setLastLoginTime(currentTime);
    localStorage.setItem('lastLoginTime', currentTime.toString());
  };

  const checkLoginStatus = () => {
    if (!lastLoginTime) return false;
    const currentTime = Date.now();
    const timeDiff = currentTime - lastLoginTime;
    const tenMinutesInMs = 10 * 60 * 1000;
    return timeDiff < tenMinutesInMs;
  };

  return (
    <AuthContext.Provider value={{ login, checkLoginStatus, lastLoginTime }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
