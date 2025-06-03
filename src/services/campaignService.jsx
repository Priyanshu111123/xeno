// services/campaignService.js
const Campaign = require('../models/Campaign');
const Customer = require('../models/Customer');
const CommunicationLog = require('../models/CommunicationLog');

const buildMongoQuery = (rules) => {
  const mongoRules = rules.map(rule => {
    const { field, operator, value } = rule;
    return { [field]: { [`$${operator}`]: isNaN(value) ? value : Number(value) } };
  });
  return { $and: mongoRules };
};

exports.estimateAudience = async (rules) => {
  const query = buildMongoQuery(rules);
  const count = await Customer.countDocuments(query);
  return count;
};

exports.createCampaign = async (rules) => {
  const query = buildMongoQuery(rules);
  const audience = await Customer.find(query);

  const campaign = await Campaign.create({
    rules,
    audienceSize: audience.length,
    createdAt: new Date()
  });

  const logs = audience.map(user => ({
    campaignId: campaign._id,
    customerId: user._id,
    status: 'PENDING',
    message: `Hi ${user.name}, here’s 10% off on your next order!`,
    createdAt: new Date()
  }));

  await CommunicationLog.insertMany(logs);

  return { campaign, logs };
};

exports.getHistory = async () => {
  return await Campaign.find().sort({ createdAt: -1 });
};
