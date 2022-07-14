import {
  faBookOpenReader,
  faHandshakeSimple,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import NavHeader from '../components/nav/NavHeader';
import AuthContext from '../context/auth';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  const {
    setUserEmail,
    setUserName,
    setSubscription,
    setExpiration,
    userEmail,
    userName,
  } = useContext(AuthContext);

  useEffect(() => {
    if (session == null) return;
  }, [session]);

  useEffect(() => {
    if (session != null) {
      async function fetchUser() {
        const userData = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/me`,
          {
            headers: {
              Authorization: `Bearer ${session.jwt}`,
            },
          }
        );
        setUserEmail(userData.data.email);
        setUserName(userData.data.username);
        setSubscription(userData.data.subscription);
        setExpiration(userData.data.expire);
      }
      fetchUser();
    }
  });

  return (
    <div className='min-h-screen pb-8'>
      <Head>
        <title>Morale Swag | Home</title>
        <meta name='description' content='Morale Swag' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavHeader />

      <div className='text-white max-w-4xl mx-auto'>
        <div className='sm:flex sm:mt-8'>
          <div className='px-8 md:pt-12'>
            <p className='pt-6 font-semibold text-xl sm:text-2xl tracking-widest text-gray-300'>
              Get inspired!
            </p>
            <h1 className='font-bold text-3xl md:text-5xl max-w-xs tracking-wider'>
              Enchich your knowledge and be wise.
            </h1>
          </div>
          <div className='md:absolute right-0 md:right-10 md:top-36 lg:top-20 lg:right-36'>
            <div className='relative my- w-full h-[400px] sm:w-[200px] sm:h-[200px] md:h-[300px] md:w-[400px] lg:w-[450px] lg:h-[400px]'>
              <Image
                src='/hero.svg'
                alt='Motivational quotes'
                priority
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
        </div>

        {session ? (
          <div className='p-8 sm:max-w-md sm:pt-16'>
            <div className='space-y-4'>
              <button
                onClick={() => router.push('/advice')}
                className='shadow-lg flex items-center px-4 space-x-4 bg-lime-500 w-full py-4 rounded-full'>
                <FontAwesomeIcon
                  icon={faHandshakeSimple}
                  className='w-6 h-6 text-emerald-700'
                />
                <p className='font-semibold text-lg tracking-widest'>ADVICE</p>
              </button>

              <button
                onClick={() => router.push('/motivational-quotes')}
                className='shadow-lg flex items-center px-4 space-x-4 bg-lime-500 w-full py-4 rounded-full'>
                <FontAwesomeIcon
                  icon={faSeedling}
                  className='w-6 h-6 text-emerald-700'
                />
                <p className='font-semibold text-lg truncate'>
                  MOTIVATIONAL QUOTES
                </p>
              </button>

              <button
                onClick={() => router.push('/proverbs')}
                className='shadow-lg flex items-center px-4 space-x-4 bg-lime-500 w-full py-4 rounded-full'>
                <FontAwesomeIcon
                  icon={faBookOpenReader}
                  className='w-6 h-6 text-emerald-700'
                />
                <p className='font-semibold text-lg truncate'>PROVERBS</p>
              </button>
            </div>
          </div>
        ) : (
          <div className='p-8'>
            <button
              className='shadow-lg shadow-gray-500 hover:shadow-gray-600 outline-none hover:bg-lime-700 transition-colors duration-500 bg-lime-800 text-lime-500 px-6 py-3 font-semibold tracking-widest rounded-full'
              onClick={() => router.push('/auth/sign-in')}>
              SIGN IN
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
