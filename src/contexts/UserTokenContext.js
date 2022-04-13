import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import UserService from '../services/UserService';
import decodeHashParams from '../utils/decodeHashParams';

const UserTokenContext = createContext();

export function UserTokenContextProvider({ children }) {
  const [accessToken, setAccessToken] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (window.location.hash) {
      const params = decodeHashParams();
      if (params.access_token) {
        setAccessToken(params.access_token);
      }
    }
  }, []);
  useEffect(() => {
    if (accessToken) {
      fetchMe();
    }
  }, [accessToken]);

  const fetchMe = async () => {
    try {
      const user = await UserService.getCurrentUser(
        accessToken
      );
      setUserId(user.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserTokenContext.Provider value={{ accessToken, userId }}>
      {children}
    </UserTokenContext.Provider>
  );
}
export function useUserToken() {
  const context = useContext(UserTokenContext);
  if (context === undefined) {
    throw new Error('Context must be within provider');
  }
  return context;
}
export default UserTokenContext;
