import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function CircularButton({ handleAdvice, isLoading }) {
  return (
    <div>
      <button
        onClick={handleAdvice}
        className='group bg-emerald-400 px-4 py-4 rounded-full text-green-900 hover:shadow-xl hover:shadow-emerald-600 hover:scale-105 transition duration-300 ease-in'>
        <FontAwesomeIcon
          icon={faSpinner}
          className={`w-8 h-8 ${isLoading ? 'animate-spin text-red-500' : ''}`}
        />
      </button>
    </div>
  );
}

export default CircularButton;
