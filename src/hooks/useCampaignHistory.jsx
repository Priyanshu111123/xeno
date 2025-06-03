// hooks/useCampaignHistory.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useCampaignHistory = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/api/campaign-history');
        setCampaigns(res.data);
      } catch (err) {
        console.error('Error loading history:', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { campaigns, loading };
};

export default useCampaignHistory;
