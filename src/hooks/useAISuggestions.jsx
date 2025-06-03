// hooks/useAISuggestions.js
import { useState } from 'react';
import axios from 'axios';

const useAISuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMessageIdeas = async (goal) => {
    try {
      setLoading(true);
      const res = await axios.post('/api/ai/suggest-messages', { goal });
      setSuggestions(res.data.messages);
    } catch (err) {
      console.error('AI fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const convertPromptToRules = async (prompt) => {
    try {
      setLoading(true);
      const res = await axios.post('/api/ai/prompt-to-rules', { prompt });
      return res.data.rules;
    } catch (err) {
      console.error('AI rule conversion error:', err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    suggestions,
    fetchMessageIdeas,
    convertPromptToRules,
    loading,
  };
};

export default useAISuggestions;
