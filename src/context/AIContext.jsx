// src/context/AIContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AIContext = createContext();

export const AIProvider = ({ children }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSuggestions = async (goal) => {
    try {
      setLoading(true);
      const res = await axios.post('/api/ai/suggest-messages', { goal });
      setSuggestions(res.data.messages);
    } catch (err) {
      console.error('Error fetching suggestions', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AIContext.Provider value={{ suggestions, fetchSuggestions, loading }}>
      {children}
    </AIContext.Provider>
  );
};

export const useAI = () => useContext(AIContext);
