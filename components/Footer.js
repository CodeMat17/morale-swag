import React from 'react';

function Footer() {
  return (
    <div className='bottom-0 p-4 flex flex-col text-center'>
      <h3 className='text-sm text-white'>
        Morale Swag. &copy; All rights reserved.
      </h3>
      <p className='text-gray-400 text-sm'>
        Contact:{' '}
        <span className='text-blue-500'>
          <a href='mailto:codemat.biz@gmail.com'>
            codemat.biz@gmail.com
          </a>
        </span>
      </p>
    </div>
  );
}

export default Footer;
