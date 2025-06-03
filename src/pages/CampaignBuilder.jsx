// CampaignBuilder.js - Campaign Segment Creation Page
import React, { useState } from 'react';
import axios from 'axios';

const CampaignBuilder = () => {
  const [rules, setRules] = useState([
    { field: '', operator: '', value: '' }
  ]);
  const [audienceSize, setAudienceSize] = useState(null);

  const handleRuleChange = (index, key, value) => {
    const updatedRules = [...rules];
    updatedRules[index][key] = value;
    setRules(updatedRules);
  };

  const addRule = () => {
    setRules([...rules, { field: '', operator: '', value: '' }]);
  };

  const previewAudience = async () => {
    try {
      const response = await axios.post('/api/preview-audience', { rules });
      setAudienceSize(response.data.size);
    } catch (error) {
      console.error('Error fetching audience size', error);
    }
  };

  const saveCampaign = async () => {
    try {
      await axios.post('/api/save-campaign', { rules });
      window.location.href = '/campaign-history';
    } catch (error) {
      console.error('Error saving campaign', error);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Campaign Segment</h2>
      {rules.map((rule, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            className="border p-2 w-1/3"
            placeholder="Field"
            value={rule.field}
            onChange={(e) => handleRuleChange(index, 'field', e.target.value)}
          />
          <select
            className="border p-2 w-1/3"
            value={rule.operator}
            onChange={(e) => handleRuleChange(index, 'operator', e.target.value)}
          >
            <option value="">Operator</option>
            <option value=">">&gt;</option>
            <option value="<">&lt;</option>
            <option value=">=">&gt;=</option>
            <option value="<=">&lt;=</option>
            <option value="==">==</option>
          </select>
          <input
            className="border p-2 w-1/3"
            placeholder="Value"
            value={rule.value}
            onChange={(e) => handleRuleChange(index, 'value', e.target.value)}
          />
        </div>
      ))}
      <button
        onClick={addRule}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Rule
      </button>
      <div className="mt-4">
        <button
          onClick={previewAudience}
          className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
        >
          Preview Audience
        </button>
        <button
          onClick={saveCampaign}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save Campaign
        </button>
      </div>
      {audienceSize !== null && (
        <div className="mt-2 text-lg">
          Estimated Audience Size: <strong>{audienceSize}</strong>
        </div>
      )}
    </div>
  );
};

export default CampaignBuilder;