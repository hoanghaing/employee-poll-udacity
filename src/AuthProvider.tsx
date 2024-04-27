import { useEffect, useState } from "react";
import { AuthContext } from './AuthContext';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '@/stores/user';
import { useSelector } from 'react-redux';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const isUserAuthenticated = () => {
    const user = useSelector((state: any) => state.user);
    return user.id;
  }
  const login = (user) => {
    if (user) {
      dispatch(setUser(user));
    } else {
      dispatch(clearUser());
      return;
    }
  };

  const logout = () => {
    dispatch(clearUser());
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
