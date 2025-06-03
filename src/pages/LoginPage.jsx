// src/pages/LoginPage.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const { loginWithGoogle } = useAuth();

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="app-name">Mini CRM</h1>
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Sign in to continue managing your clients and campaigns.</p>
        <button onClick={loginWithGoogle} className="google-login-btn">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google logo"
            className="google-logo"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
