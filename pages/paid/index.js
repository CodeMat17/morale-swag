import { faBell, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Paid() {
  return (
    <div>
      <div className='max-w-sm mx-auto text-center py-16'>
        <FontAwesomeIcon
          icon={faSquareCheck}
          className='w-12 h-12 pt-8 text-lime-500'
        />
        <h3 className='text-lime-500 tracking-widest'>Transaction completed.</h3>
        <p className='pt-8 text-white'>
          For a faster subscription access, ring the bell bellow to notify us.
        </p>
        <button className='mt-4 bg-red-600 text-white text-sm font-semibold tracking-wider px-4 py-3 rounded-full transition duration-500 hover:bg-red-400'>
          <FontAwesomeIcon icon={faBell} className='w-4 h-4' />
        </button>
      </div>
    </div>
  );
}

export default Paid;
