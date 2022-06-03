import React, { useEffect, useState } from 'react';
import { User } from '../types/User';
import { AuthContext } from './AuthContext';
import userAPI from '../services/userAPI';

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const [reload, setReload] = useState(false);
  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {

  })


  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('token');

      if (storageData) {
        const data = await userAPI.authToken(storageData);
        if (data) {
          return setUser(data);
        }
      }
    };
    validateToken();
  }, [userAPI]);

  const data = {
    user,
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
