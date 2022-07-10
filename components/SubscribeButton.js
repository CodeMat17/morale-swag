import React from 'react';
import toast from 'react-hot-toast';

function SubscribeButton() {
  const subscribe = () => {
    toast.success('Coming Soon!');
  };

  return (
    <div>
      <button
        onClick={subscribe}
        className='mt-12 bg-lime-500 px-5 py-3 font-semibold tracking-wider text-white rounded-md shadow-lg shadow-gray-500'>
        SUBSCRIBE NOW
      </button>
    </div>
  );
}

export default SubscribeButton;
