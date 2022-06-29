import { useRouter } from 'next/router';
import { useContext } from 'react';
import AuthContext from '../../context/auth';

function NavHeader() {
  const router = useRouter();
  const {
    userJWT,
    setUserJWT,
    userEmail,
    setUserEmail,
    userName,
    setUserName,
  } = useContext(AuthContext);

  const signOut = () => {
    setUserJWT(null);
    setUserEmail('');
    setUserName('');
  };

  return (
    <nav className='sticky top-0 z-50 bg-gray-800 shadow px-4 md:px-8'>
      <div className='px-4 pt-4 pb-1 flex items-center justify-between'>
        <h1 className='text-white font-semibold text-xl tracking-wider'>
          MORALE SWAG
        </h1>
        <div className='space-x-4'>
          <button
            onClick={() => router.push('/')}
            className='text-emerald-400 text-lg font-semibold tracking-wide'>
            Home
          </button>
        </div>
      </div>
      {userJWT && (
        <div className='flex justify-between items-center px-4 text-gray-300'>
          <div>
            <p>Welcome {userName} !</p>
            <p>{userEmail}</p>
          </div>
          <button
            onClick={signOut}
            className='text-emerald-400 text-lg font-semibold tracking-wide'>
            Sign out
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavHeader;
