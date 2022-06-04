import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import userAPI from '../services/userAPI';

export function AuthProvider({ children }: any) {
  const [reload, setReload] = useState(false);
  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('token');

      if (storageData) {
        const data = await userAPI.authToken(storageData);
        if (data) {
          localStorage.setItem('user', JSON.stringify(data));
        }
      }
    };
    validateToken();
  }, [userAPI]);

  const data = {
    allTweets,
    setAllTweets,
    reload,
    setReload,
  };

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
}
