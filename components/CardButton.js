import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateBack, faArrowRotateRight, faSpinner } from '@fortawesome/free-solid-svg-icons';

function CardButton({ handleQuotes, isLoading }) {
  return (
    <div className='flex space-x-6'>
      {isLoading && (<p className='pt-6 text-sm text-red-400 tracking-widest'>loading...</p>)}
      <button
        onClick={handleQuotes}
        className='flex items-center justify-center group bg-lime-700 border-2 border-lime-500 p-2 rounded-full text-green-900 hover:shadow-xl hover:shadow-emerald-600 hover:scale-105 transition duration-300 ease-in'>
        <FontAwesomeIcon
          icon={faArrowRotateRight}
          className={`w-8 h-8 ${isLoading ? 'animate-spin text-red-500' : 'text-lime-500'}`}
        />
      </button>
    </div>
  );
}

export default CardButton;
