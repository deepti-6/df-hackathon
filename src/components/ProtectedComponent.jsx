// df-frontend/src/components/ProtectedComponent.js

import React, { useContext, useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const ProtectedComponent = () => {
  const { isAuthenticated } = useAuth();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isAuthenticated) {
          const token = 'your-jwt-token'; // Replace with the actual token from your authentication process
          const response = await fetch('http://localhost:3001/api/protected-route', {
            headers: {
              Authorization: token,
            },
          });

          const data = await response.json();
          setMessage(data.message);
        } else {
          setMessage('You are not authenticated.');
        }
      } catch (error) {
        console.error('Error fetching protected data:', error);
      }
    };

    fetchData();
  }, [isAuthenticated]);

  return <div>{message}</div>;
};

export default ProtectedComponent;
