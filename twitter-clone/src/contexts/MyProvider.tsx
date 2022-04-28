import { useEffect, useState } from "react";
import { User } from "../types/User";
import { AuthContext } from "./AuthContext";
import userAPI from "../services/userAPI";

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const [tweet, setTweet] = useState('');

  const signin = async (email: string, password: string) => {
    const data = await userAPI.signin({ email, password });

    if (data.user && data.token) {
      setUser(data.user);
      setTokenInStorage(data.token);
    } 
    return data;
  }

  const setTokenInStorage = (token: string) => {
    localStorage.setItem('authToken', token);
  }

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('authToken');

      if (storageData) {
        const data = await userAPI.authToken(storageData);
        if (data) {
          return setUser(data);
        }
      }
    }
    validateToken();
  }, [userAPI])

  const data = {
    user,
    signin,
  }
  
  return (
    <AuthContext.Provider value={data}>
      { children }
    </AuthContext.Provider>
  );
}
