// src/utils/formatters.js

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
};

export const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num);
};
