// hooks/useCustomers.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/api/customers');
      setCustomers(res.data);
    } catch (err) {
      console.error('Customer fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return { customers, loading };
};

export default useCustomers;
