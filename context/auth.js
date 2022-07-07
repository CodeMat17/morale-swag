import axios from 'axios';
import { createContext, useState } from 'react';
import {linstance} from '../lib/api'

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userJWT, setUserJWT] = useState(null);
  const [userSubscription, setSubscription] = useState(null);

  // async function doRegister(values) {
  //   try {
  //     const resp = await axios.post(
  //       `${NEXT_PUBLIC_STARPI_URL}/api/auth/register`,
  //       values
  //     );
  //     return ['OK', resp.data.message];
  //   } catch (error) {
  //     return ['alert', error.response.data.message];
  //   }
  // }

  const userDetail = {
    userEmail: userEmail,
    setUserEmail: setUserEmail,
    userName,
    setUserName,
    userJWT,
    setUserJWT,
    userSubscription,
    setSubscription,
  };

  return (
    <AuthContext.Provider
      value={
        userDetail
        // userEmail,
        // setUserEmail,
        // userName,
        // setUserName,
        // userJWT,
        // setUserJWT,
        // userSubscription,
        // setSubscription,
      }>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
