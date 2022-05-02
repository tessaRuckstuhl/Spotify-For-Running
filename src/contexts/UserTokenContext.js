import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import UserService from '../services/UserService';
import decodeHashParams from '../utils/decodeHashParams';
import ErrorContext from './ErrorContext';

const UserTokenContext = createContext();

export function UserTokenContextProvider({ children }) {
  const {showSnack} = useContext(ErrorContext)
  // console.log(t)
  const [accessToken, setAccessToken] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');


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
      setUserName(user.display_name);
    } catch (error) {
      setUserName('???')
      console.log(error)
      if(error.response.status == 403){
        console.log(error.response.data, error.response)
        showSnack(`${error.response.data} - This app won't work for you until I register your account`)
      }
    }
  };

  return (
    <UserTokenContext.Provider
      value={{ accessToken, userId, userName }}
    >
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
