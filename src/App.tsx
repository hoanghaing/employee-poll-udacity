import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlankLayout from '@/layouts/BlankLayout';
import HeaderLayout from '@/layouts/HeaderLayout';
import DashBoard from '@/pages/DashBoard/DashBoard';
import Login from '@/pages/Login/Login';
import Leaderboard from '@/pages/Leaderboard/Leaderboard';
import NewPoll from '@/pages/NewPoll/NewPoll';
import PollDetail from '@/pages/PollDetail/PollDetail';
import NotFound from '@/pages/NotFound/NotFound';
const App = () => {
  const [loading, setLoading] = useState(true);
  const authenticatedHandling = () => {
    setLoading(false);
    const loggedUser = localStorage.getItem("authenticated");
    if (!loggedUser) {
      const isInLoginRoute = window.location.href.includes('/login');
      if (isInLoginRoute) return;
      else {
        window.location.href = '/login';
      }
    }
  }
  useEffect(() => {
    setTimeout(() => {
      authenticatedHandling();
    }, 1000);
  }, []);

  if (loading) {
    return <span className="absolute top-1/2 left-1/2 loading loading-dots loading-lg"></span>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={
            <HeaderLayout>
              <DashBoard />
            </HeaderLayout>
          }
        >
        </Route>
        <Route path="/home"
          element={
            <HeaderLayout>
              <DashBoard />
            </HeaderLayout>
          }
        >
        </Route>
        <Route path="/leaderboard"
          element={
            <HeaderLayout>
              <Leaderboard />
            </HeaderLayout>
          }
        >
        </Route>
        <Route path="/new"
          element={
            <HeaderLayout>
              <NewPoll />
            </HeaderLayout>
          }
        >
        </Route>
        <Route path="questions/:question_id" element={<HeaderLayout>
          <PollDetail />
        </HeaderLayout>} />
        <Route element={<BlankLayout><NotFound /></BlankLayout>}></Route>
        <Route path="/login"
          element={
            <BlankLayout>
              <Login />
            </BlankLayout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
