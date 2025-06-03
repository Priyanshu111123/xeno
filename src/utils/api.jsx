// src/utils/api.js
import axios from 'axios';

export const fetchData = async (url, setState) => {
  try {
    const res = await axios.get(url);
    setState(res.data);
  } catch (err) {
    console.error('API Error:', err);
  }
};

export const postData = async (url, payload) => {
  try {
    const res = await axios.post(url, payload);
    return res.data;
  } catch (err) {
    console.error('POST Error:', err);
    throw err;
  }
};

export const deleteData = async (url) => {
  try {
    await axios.delete(url);
  } catch (err) {
    console.error('DELETE Error:', err);
  }
};
