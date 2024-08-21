// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import AppLayout from './components/pages/Layout/AppLayout';
import AuthForm from './components/auth/authForm';
import LandingPage from './components/pages/landingPage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/authForm" element={<AuthForm />} />
          <Route path="/" element={<LandingPage />} />

          {/* Main Application Layout with Protected Routes */}
          <Route path="/*" element={<AppLayout />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
