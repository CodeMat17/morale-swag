import { createContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userJWT, setUserJWT] = useState('');
  const [userSubscription, setSubscription] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        userEmail,
        setUserEmail,
        userName,
        setUserName,
        userJWT,
        setUserJWT,
        userSubscription,
        setSubscription,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
