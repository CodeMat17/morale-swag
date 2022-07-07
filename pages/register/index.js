import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Register from '../../components/auth/Register';

function RegisterUser() {
  // const { username, userEmail, userJWT } = useContext(AuthContext);

  // const router = useRouter();

  // const [isRegistering, setRegistering] = useState(false);
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [cpassword, setCPassword] = useState('');

  // const registerUser = async (e) => {
  //   e.preventDefault();
  //   setRegistering(true);

  //   if (password != cpassword) {
  //     setRegistering(false);
  //     toast.error('Your password confirmation does not match');
  //     return;
  //   } else {
  //     await axios
  //       .post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`, {
  //         username,
  //         email,
  //         password,
  //       })
  //       .then((response) => {
  //         toast.success(
  //           `${response.data.user.username} is successfully registered.`,
  //           {
  //             duration: 4000,
  //             position: 'top-center',
  //           }
  //         );
  //         setRegistering(false);
  //         setUsername('');
  //         setEmail('');
  //         setPassword('');
  //         router.push('/auth/sign-in');
  //         // console.log('Well done!');
  //         // console.log('User profile', response.data.user);
  //         // console.log('User token', response.data.jwt);
  //       })
  //       .catch((error) => {
  //         setRegistering(false);
  //         console.log(error.response);
  //         toast.error(error.response.data.error.message, {
  //           duration: 4000,
  //           position: 'top-center',
  //         });
  //       });
  //   }
  // };

  return (
    <div className='px-8 py-20'>
      <Register />
      {/* <h2 className='text-2xl font-semibold text-white tracking-wider'>
        Register {username}
      </h2>
      <div className='py-8'>
        <form onSubmit={registerUser} className='space-y-4'>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='Enter your fullname'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='w-full p-3 rounded-md outline-none'
          />
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-3 rounded-md outline-none'
          />
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter your password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full p-3 rounded-md outline-none'
          />
          <input
            type='password'
            name='cpassword'
            id='cpassword'
            placeholder='Confirm your password'
            required
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
            className='w-full p-3 rounded-md outline-none'
          />
          <div>
            <button
              type='submit'
              className='text-white tracking-wider w-full bg-purple-600 py-3 mt-4 rounded-md'>
              {isRegistering ? 'PLEASE WAIT...' : 'REGISTER'}
            </button>
          </div>
          <div className='flex justify-end pt-'>
            <button
              onClick={() => router.push('/auth/sign-in')}
              className='text-lime-500 tracking-wider py-2'>
              Sign In rather
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default RegisterUser;
