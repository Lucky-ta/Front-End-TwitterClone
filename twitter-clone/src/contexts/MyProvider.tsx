import { useState } from 'react';
import { MyContext } from './MyContext';

export function MyProvider({ children }: any) {
  const [token, setToken] = useState('');

  const data = {
    token, setToken,
  };

  return (
    <MyContext.Provider value={data}>
      { children }
    </MyContext.Provider>
  );
}
