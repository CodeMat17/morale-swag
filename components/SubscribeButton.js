import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';

function SubscribeButton() {
  // const subscribe = () => {
    // toast.success('Coming Soon!');
    // https://pay.squadco.com/NG13R3
  // };

  return (
    <div className='mt-8'>
      {/* <button
        onClick={subscribe}
        className='mt-12 bg-lime-500 px-5 py-3 font-semibold tracking-wider text-white rounded-md shadow-lg shadow-gray-500'>
        SUBSCRIBE NOW
      </button> */}
      <Link href='https://pay.squadco.com/NG13R3'>
        <a className='mt-12 bg-lime-500 px-5 py-3 font-semibold tracking-wider text-white rounded-md shadow-lg shadow-gray-500'>
          SUBSCRIBE NOW
        </a>
      </Link>
    </div>
  );
}

export default SubscribeButton;
