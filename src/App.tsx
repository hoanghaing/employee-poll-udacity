import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
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
  const [user, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem('cachedUser');
    return storedUser ? JSON.parse(storedUser) : { avatarURL: "", id: "", name: "" };
  });
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
          <HeaderLayout>
            <NotFound />
          </HeaderLayout>
        }
      ></Route>
    </Routes>
  )
}

export default App
