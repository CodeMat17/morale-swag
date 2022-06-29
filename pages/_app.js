import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../context/auth';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Toaster />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
