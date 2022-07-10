import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import NavHeader from '../../components/nav/NavHeader';

function SignIn() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = async (values) => {
    const { email, password } = values;
    setSubmitting(true);

    const result = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
    });
    if (result.ok) {
      setSubmitting(false);
      toast.success('You have successfully signed in.');
      router.replace('/');
      reset();
    }
    if (!result.ok) {
      setSubmitting(false);
      toast.error('Invalid Credentials!');
    }
  };

  const popToast = () => {
    toast.success('Coming Soon!!!');
  };

  return (
    <div>
      <NavHeader />

      <div className='p-8 max-w-sm mx-auto'>
        <h1 className='font-semibold text-2xl text-white'>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='py-6 space-y-4'>
          <div>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              {...register('email', {
                required: 'Email is required',
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              className='text-lime-600 w-full rounded-md px-4 py-3 outline-none'
            />
            {errors.email && (
              <p className='text-red-500'>{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              id='password'
              name='password'
              type='password'
              placeholder='Password is required'
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              {...register('password', {
                required: 'Please specify a password',
                minLength: {
                  value: 8,
                  message: 'Password is a min. of 8 characters',
                },
              })}
              className='text-lime-600 w-full rounded-md px-4 py-3 outline-none'
            />
            {errors.password && (
              <p className='text-red-500'>{errors.password.message}</p>
            )}
          </div>

          <div className='py-4'>
            <button
              type='submit'
              disabled={isSubmitting}
              className={`text-white ${
                isSubmitting ? 'bg-lime-800' : 'bg-lime-500'
              }  py-3 rounded-md text-lg w-full font-semibold tracking-wider`}>
              {isSubmitting ? 'PLEASE WAIT...' : 'SIGN IN'}
            </button>
          </div>

          <div className='flex items-center justify-center space-x-6'>
            <div className='h-0.5 w-full bg-gray-600'></div>
            <p className='text-lime-700'>OR</p>
            <div className='h-0.5 w-full bg-gray-600'></div>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex flex-col items-center'>
              <p className='text-center text-sm text-gray-300'>Are you new?</p>
              <button
                onClick={() => router.push('/auth/register')}
                className='mt-3 px-4 py-3 text-lime-500 bg-lime-800 rounded-full tracking-wider'>
                Register
              </button>
            </div>

            <div className='bg-gray-700 w-0.5 h-12'></div>

            <div className='flex flex-col items-center'>
              <p className='text-center text-sm text-gray-300'>
                Sign in with Google
              </p>
              <div
                onClick={popToast}
                className='cursor-pointer relative mt-3 w-[50px] h-[50px]'>
                <Image
                  alt='google link'
                  src='/google_logo.webp'
                  layout='fill'
                  objectFit='center'
                  className='rounded-full'
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
