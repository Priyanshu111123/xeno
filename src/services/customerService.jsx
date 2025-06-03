// services/customerService.js
const Customer = require('../models/Customer');

exports.addCustomer = async (data) => {
  return await Customer.create(data);
};

exports.bulkAddCustomers = async (customers) => {
  return await Customer.insertMany(customers);
};
