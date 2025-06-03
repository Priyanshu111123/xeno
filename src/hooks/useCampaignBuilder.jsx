// hooks/useCampaignBuilder.js
import { useState } from 'react';
import axios from 'axios';

const useCampaignBuilder = () => {
  const [rules, setRules] = useState([{ field: '', operator: '', value: '' }]);
  const [audienceSize, setAudienceSize] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRuleChange = (index, key, value) => {
    const updated = [...rules];
    updated[index][key] = value;
    setRules(updated);
  };

  const addRule = () => {
    setRules([...rules, { field: '', operator: '', value: '' }]);
  };

  const previewAudience = async () => {
    try {
      setLoading(true);
      const res = await axios.post('/api/preview-audience', { rules });
      setAudienceSize(res.data.size);
    } catch (err) {
      console.error('Preview error:', err);
    } finally {
      setLoading(false);
    }
  };

  const saveCampaign = async () => {
    try {
      setLoading(true);
      await axios.post('/api/save-campaign', { rules });
      window.location.href = '/campaign-history';
    } catch (err) {
      console.error('Save error:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    rules,
    audienceSize,
    loading,
    handleRuleChange,
    addRule,
    previewAudience,
    saveCampaign,
  };
};

export default useCampaignBuilder;
