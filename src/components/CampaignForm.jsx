// CampaignForm.js
import React, { useState } from 'react';
import RuleBuilder from './RuleBuilder';
import axios from 'axios';

const CampaignForm = () => {
  const [rules, setRules] = useState([{ field: '', operator: '', value: '' }]);
  const [audienceSize, setAudienceSize] = useState(null);

  const handleRuleChange = (index, key, value) => {
    const updated = [...rules];
    updated[index][key] = value;
    setRules(updated);
  };

  const addRule = () => {
    setRules([...rules, { field: '', operator: '', value: '' }]);
  };

  const previewAudience = async () => {
    const res = await axios.post('/api/preview-audience', { rules });
    setAudienceSize(res.data.size);
  };

  const saveCampaign = async () => {
    await axios.post('/api/save-campaign', { rules });
    window.location.href = '/campaign-history';
  };

  return (
    <div>
      {rules.map((rule, idx) => (
        <RuleBuilder
          key={idx}
          index={idx}
          rule={rule}
          onChange={handleRuleChange}
        />
      ))}
      <button onClick={addRule}>Add Rule</button>
      <button onClick={previewAudience}>Preview</button>
      <button onClick={saveCampaign}>Save</button>
      {audienceSize !== null && <p>Audience Size: {audienceSize}</p>}
    </div>
  );
};

export default CampaignForm;