import {useRouter} from 'next/router';

function NavHeader() {
  const router = useRouter();

  return (
    <nav className='sticky top-0 z-50 bg-gray-800 shadow px-4 md:px-8'>
      <div className='p-4 flex items-center justify-between'>
        <h1 className='text-white font-semibold text-xl tracking-wider'>
          MORALE SWAG
        </h1>
        <button onClick={() => router.push('/')} className='text-emerald-400 text-lg font-semibold tracking-wide'>Home</button>
      </div>
    </nav>
  );
}

export default NavHeader;
