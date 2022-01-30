import React from 'react';
import Link from 'next/link';

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

import { CgNotes } from 'react-icons/cg';

const Header: React.FC = () => {
  return (
    <>
      <header className=''>
        <div className='flex justify-between py-2 px-16'>
          <div>
            <h1 className='text-4xl m-0 font-Apple'>Kotaro Blog</h1>
          </div>
          <div className='flex items-center'>
            <Link href='/' passHref>
              <div
                className='
                flex items-center
                cursor-pointer
              '
              >
                <AiOutlineHome />
                Home
              </div>
            </Link>
            <Link href='/Blog' passHref>
              <div
                className='
                flex items-center
                pl-4 cursor-pointer
              '
              >
                <CgNotes />
                Blog
              </div>
            </Link>
            <Link href='/About' passHref>
              <div
                className='
                flex items-center
                pl-4 cursor-pointer
              '
              >
                <AiOutlineUser />
                About
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
