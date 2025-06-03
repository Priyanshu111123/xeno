import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CampaignHistory = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await axios.get('/api/campaign-history');
        setCampaigns(res.data);
      } catch (err) {
        console.error('Error fetching campaign history', err);
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Campaign History</h2>
      {campaigns.map((campaign, idx) => (
        <div key={idx} className="border p-4 mb-2 rounded shadow">
          <div className="font-semibold">Campaign #{campaign.id}</div>
          <div>Audience Size: {campaign.audienceSize}</div>
          <div>Sent: {campaign.sent}</div>
          <div>Failed: {campaign.failed}</div>
          <div>Date: {new Date(campaign.createdAt).toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
};

export default CampaignHistory;
