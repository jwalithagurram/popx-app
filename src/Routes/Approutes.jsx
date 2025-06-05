import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home.jsx';
import Login from '../Components/Login.jsx';
import Signup from '../Components/Signup.jsx';
import Profile from '../Components/Profile.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/profile" element={
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    } />
  </Routes>
);

export default AppRoutes;