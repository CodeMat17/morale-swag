import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';
import { AuthProvider } from '../context/auth';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <Toaster />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;
