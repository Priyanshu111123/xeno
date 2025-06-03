// src/App.js
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';

import './App.css'; 

const HomePage = React.lazy(() => import('./pages/HomePage'));
const CampaignBuilder = React.lazy(() => import('./pages/CampaignBuilder'));
const CampaignHistory = React.lazy(() => import('./pages/CampaignHistory'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <ErrorBoundary>
          <div className="app-container">
            <Suspense fallback={<Spinner />}>
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route
                    path="/campaign-builder"
                    element={
                      <PrivateRoute>
                        <CampaignBuilder />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/campaign-history"
                    element={
                      <PrivateRoute>
                        <CampaignHistory />
                      </PrivateRoute>
                    }
                  />
                  {/* fallback redirect */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
            </Suspense>
          </div>
        </ErrorBoundary>
      </Router>
    </AuthProvider>
  );
}

export default App;
