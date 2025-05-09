import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './Pages/Landing/LandingPage';
import Login from './Pages/LoginSignup/Login'
import Signup from './Pages/LoginSignup/Signup'
import Dashboard from './Pages/Dashboard/Dash';
import Students from './Components/Dashboard/Students/index.jsx';
import Teachers from './Components/Dashboard/Teachers/index.jsx';
import Exam from './Components/Dashboard/Exam/index.jsx';
import './index.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/exam" element={<Exam />} />

    </Routes>
  </BrowserRouter>
);






