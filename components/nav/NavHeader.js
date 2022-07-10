import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import AuthContext from '../../context/auth';
import {faHouse, faPowerOff} from '@fortawesome/free-solid-svg-icons'

function NavHeader() {
  const { data: session } = useSession();
  const router = useRouter();
  const {
    userJWT,
    setUserJWT,
    userEmail,
    setUserEmail,
    userName,
    setUserName,
  } = useContext(AuthContext);

  return (
    <nav className='sticky top-0 z-50 bg-gray-800 shadow px-4 md:px-8'>
      <div className='p-4 flex items-center justify-between'>
        <h1 className='text-white font-semibold text-xl tracking-wider'>
          MORALE SWAG
        </h1>
        <div className='space-x-4'>
          <button
            onClick={() => router.push('/')}
            className='text-lime-500 text-lg font-semibold tracking-wide'>
            <FontAwesomeIcon icon={faHouse} className='w-8 h-8' />
          </button>
        </div>
      </div>
      {session && (
        <div className='flex justify-between items-center px-4 pb-4 space-x-2'>
          <div className='truncate'>
            <p className='tracking-wider text-sm text-gray-300'>
              Welcome! {userName}
            </p>
          </div>
          <button
            onClick={signOut}
            className='w-8 h-8 text-red-500'>
            <FontAwesomeIcon icon={faPowerOff} className='w-8 h-8' />
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavHeader;
