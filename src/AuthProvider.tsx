import { useEffect, useState } from "react";
import { AuthContext } from './AuthContext';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '@/stores/user';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const isUserAuthenticated = () => {
    const cachedUser = localStorage.getItem('cachedUser');
    return cachedUser;
  }
  const login = (user) => {
    if (user) {
      dispatch(setUser(user));
      localStorage.setItem('cachedUser', JSON.stringify(user));
    } else {
      dispatch(clearUser());
      localStorage.removeItem('cachedUser');
      return;
    }
  };

  const logout = () => {
    dispatch(clearUser());
    localStorage.removeItem('cachedUser');
    return;
  };

  return (
    <AuthContext.Provider
      value={{
        isUserAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };
