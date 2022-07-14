import { createContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState('myyyemail@cod.com');
  const [userName, setUserName] = useState('Matthew');
  const [userJWT, setUserJWT] = useState(null);
  const [userSubscription, setSubscription] = useState(false);
  const [expiration, setExpiration] = useState(false);

  const userDetail = {
    userEmail: userEmail,
    setUserEmail: setUserEmail,
    userName,
    setUserName,
    userJWT,
    setUserJWT,
    userSubscription,
    setSubscription,
    setExpiration,
    expiration,
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
