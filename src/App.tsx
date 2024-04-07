import React, { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlankLayout from '@/layouts/BlankLayout';
import HeaderLayout from '@/layouts/HeaderLayout';
import DashBoard from '@/pages/DashBoard/DashBoard';
import Login from '@/pages/Login/Login';
import Leaderboard from '@/pages/Leaderboard/Leaderboard';
import NewPoll from '@/pages/NewPoll/NewPoll';
import NotFound from '@/pages/NotFound/NotFound';
function App() {
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
        <Route path="/login"
          element={
            <BlankLayout>
              <Login />
            </BlankLayout>
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
        <Route element={<BlankLayout><NotFound /></BlankLayout>}></Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
