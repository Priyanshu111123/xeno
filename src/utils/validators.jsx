// src/utils/validators.js

export const isValidRule = (rule) => {
  return (
    rule.field.trim() !== '' &&
    rule.operator.trim() !== '' &&
    rule.value.trim() !== ''
  );
};

export const isEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const isPhoneNumber = (phone) => {
  return /^\d{10,15}$/.test(phone);
};
