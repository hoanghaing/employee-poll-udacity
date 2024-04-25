import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from './AuthContext';
import * as api from './api/index';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '@/stores/user';

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [authState, setAuthState] = useState({});
  const [isError, setIsError] = useState(false);

  const isUserAuthenticated = () =>
    authState && Object.keys(authState)?.length > 0 ? true : false;

  const login = (user) => {
    if (user) {
      dispatch(setUser(user));
      setAuthState(user);
      setIsError(!isUserAuthenticated());
    } else {
      dispatch(clearUser())
      return;
    }
  };

  const logout = () => {
    setAuthState({});
    setIsError(false);
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        isUserAuthenticated,
        login,
        logout,
        isError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };
