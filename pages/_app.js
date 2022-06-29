import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../context/auth';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <Toaster />
        <Component {...pageProps} />
      </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;
