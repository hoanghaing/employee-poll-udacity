import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';

function Protected({ children }) {
  const { isUserAuthenticated } = useContext(AuthContext);
  const location = useLocation();
  return !isUserAuthenticated() ? (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  ) : (
    children
  );
}

export default Protected;