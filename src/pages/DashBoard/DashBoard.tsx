import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Home from '@/components/Home';
import Leaderboard from '@/components/Leaderboard';
import New from '@/components/New';
import './DashBoard.scss';
const DashBoard = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState("");
  useEffect(() => {
    const loggedUser = localStorage.getItem("authenticated");
    if (loggedUser) {
      setAuthenticated(loggedUser);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (!authenticated) {
    return <Navigate replace to="/login" />;
  }
  return (
    <div className="container">
    </div>
  );
}
export default DashBoard