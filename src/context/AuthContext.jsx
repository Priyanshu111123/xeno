// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase'; // make sure firebase.js is configured

const auth = getAuth(app);
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    const provider = new (await import('firebase/auth')).GoogleAuthProvider();
    const { signInWithPopup } = await import('firebase/auth');
    try {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
