// src/context/CampaignContext.js
import React, { createContext, useContext, useState } from 'react';

const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
  const [rules, setRules] = useState([{ field: '', operator: '', value: '' }]);
  const [audienceSize, setAudienceSize] = useState(null);

  const updateRule = (index, key, value) => {
    const updated = [...rules];
    updated[index][key] = value;
    setRules(updated);
  };

  const addRule = () => {
    setRules([...rules, { field: '', operator: '', value: '' }]);
  };

  return (
    <CampaignContext.Provider value={{
      rules, setRules, audienceSize, setAudienceSize, updateRule, addRule
    }}>
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaign = () => useContext(CampaignContext);
