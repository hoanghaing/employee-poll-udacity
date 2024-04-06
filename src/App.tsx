import React, { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import About from '@/pages/About/About';
import NotFound from '@/pages/NotFound/NotFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
