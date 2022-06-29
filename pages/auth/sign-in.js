import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import NavHeader from '../../components/nav/NavHeader';
import AuthContext from '../../context/auth';

function SingIn() {
  const router = useRouter();
  const { setUserEmail, setUserName, setUserJWT, setSubscription } = useContext(AuthContext);

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [waiting, setWaiting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setWaiting(true);
   await axios
      .post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`, {
        identifier,
        password,
      })
      .then((response) => {
        console.log('jwt -', response.data);
        setUserName(response.data.user.username);
        setUserEmail(response.data.user.email);
        setSubscription(response.data.user.subscription);
        setUserJWT(response.data.jwt);
        toast.success(`You are logged in as ${response.data.user.username}.`, {
          duration: 4000,
          position: 'top-center',
        });
        setWaiting(false);
        router.replace('/');
      })
      .catch((error) => {
        setWaiting(false);
        toast.error(error.response.data.error.message, {
          duration: 4000,
          position: 'top-center',
        });
      });
  };

  return (
    <div>
      <NavHeader />

      <div className='p-8 max-w-sm mx-auto'>
        <h1 className='font-semibold text-2xl text-white'>Sign In</h1>
        <form onSubmit={onSubmit} className='py-6 space-y-4'>
          <input
            id='email'
            name='identifier'
            type='identifier'
            required
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder='Enter your email'
            className='w-full rounded-md p-3 outline-none'
          />
          <input
            id='password'
            name='password'
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
            className='w-full rounded-md p-3 outline-none'
          />
          <div className='pt-6'>
            <button
              type='submit'
              className='text-white bg-gray-600 py-3 rounded-md text-lg w-full font-semibold tracking-wider'>
              {waiting ? 'PLEASE WAIT...' : 'SIGN IN'}
            </button>
          </div>
          <div className='flex justify-end pt-'>
            <button
              onClick={() => router.push('/auth/register-user')}
              className='text-lime-500 tracking-wider py-2'>
              Or register here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SingIn;
