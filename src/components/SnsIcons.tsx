import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaWikipediaW } from 'react-icons/fa';

const iconBlue = {
  color: '#00b0ff',
};

const iconSkyBlue = {
  color: '#00e5ff',
};

const SnsIcons: React.FC = () => {
  return (
    <>
      <div className='flex justify-end'>
        <Link href='https://github.com/kotaro-lab457'>
          <div
            className='
            transition duration-500
            text-2xl rounded-full
            bg-gray-100 p-2
            border border-gray-100
            cursor-pointer
            hover:opacity-75'
          >
            <FaGithub />
          </div>
        </Link>
        <Link href='https://twitter.com/programming0457'>
          <div
            style={iconBlue}
            className='
              transition duration-500
              text-2xl rounded-full
              bg-gray-100
              p-2 ml-2
              border border-gray-100
              cursor-pointer
              hover:opacity-75'
          >
            <FaTwitter />
          </div>
        </Link>
        <Link href='https://www.wantedly.com/id/suzukikkk'>
          <div
            style={iconSkyBlue}
            className='
              transition duration-500
              text-2xl rounded-full
              bg-gray-100
              p-2 ml-2
              border border-gray-100
              cursor-pointer
              hover:opacity-75'
          >
            <FaWikipediaW />
          </div>
        </Link>
      </div>
    </>
  );
};

export default SnsIcons;
