import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { setUser } from '@/stores/user';
import Protected from "@/components/Protected";
import BlankLayout from '@/layouts/BlankLayout';
import HeaderLayout from '@/layouts/HeaderLayout';
import DashBoard from '@/pages/DashBoard/DashBoard';
import Login from '@/pages/Login/Login';
import Leaderboard from '@/pages/Leaderboard/Leaderboard';
import NewPoll from '@/pages/NewPoll/NewPoll';
import PollDetail from '@/pages/PollDetail/PollDetail';
import NotFound from '@/pages/NotFound/NotFound';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userData = localStorage.getItem('cachedUser') || null;
    if (userData) {
      // @ts-ignore
      const user = JSON.parse(userData) || {};
      dispatch(setUser(user));
    }

  }, []);
  return (
    <Routes>
      <Route path="/"
        element={
          <Protected>
            <HeaderLayout>
              <DashBoard />
            </HeaderLayout>
          </Protected>
        }
      >
      </Route>
      <Route path="/home"
        element={
          <Protected>
            <HeaderLayout>
              <DashBoard />
            </HeaderLayout>
          </Protected>
        }
      >
      </Route>
      <Route path="/leaderboard"
        element={
          <Protected>
            <HeaderLayout>
              <Leaderboard />
            </HeaderLayout>
          </Protected>
        }
      >
      </Route>
      <Route path="/new"
        element={
          <Protected>
            <HeaderLayout>
              <NewPoll />
            </HeaderLayout>
          </Protected>
        }
      >
      </Route>
      <Route
        path="questions/:question_id"
        element={
          <Protected>
            <HeaderLayout>
              <PollDetail />
            </HeaderLayout>
          </Protected>
        } />
      <Route path="/login"
        element={
          <BlankLayout>
            <Login />
          </BlankLayout>
        }
      ></Route>
      <Route path="/notfound"
        element={
          <Protected>
            <HeaderLayout>
              <NotFound />
            </HeaderLayout>
          </Protected>
        }
      ></Route>
    </Routes>
  )
}

export default App
