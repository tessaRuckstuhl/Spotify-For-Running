import { ThemeContext } from '@emotion/react';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getHashParams } from '../utils/tools';

const TokenContext = createContext();

export function TokenContextProvider({ children }) {
  const [accessToken, setAccessToken] = useState('');
  useEffect(() => {
    if (window.location.hash) {
      const params = getHashParams();
      if (params.access_token) {
        setAccessToken(params.access_token);
      }
    }
  }, []);

  return (
    <TokenContext.Provider value={{ accessToken }}>
      {children}
    </TokenContext.Provider>
  );
}
export function useToken() {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error('Context must be within provider');
  }
  return context;
}
export default TokenContext;
