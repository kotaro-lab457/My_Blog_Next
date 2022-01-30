import React from 'react';
import Image from 'next/image';
import SnsIcons from '@Components/SnsIcons';

const Top: React.FC = () => {
  return (
    <>
      <div className='relative'>
        <div className='w-full h-40 bg-top-back' />
        <div className='w-full absolute top-10'>
          <h1 className='text-6xl font-Apple text-center'>Kotaro Blog</h1>
        </div>
      </div>
      <div className='py-10'>
        <section className='flex justify-center'>
          <div>
            <Image
              priority
              alt='profile icon'
              src='/images/catcat.png'
              height={120}
              width={120}
              className='rounded-full'
            />
            <h2 className='font-Courier'>Suzuki Kotaro</h2>
          </div>
          <div className='ml-8'>
            <p>現在、SES企業に勤めている新米エンジニアです。</p>
            <p>日々の学習や娯楽についてちょこちょこ発信。よろしくどうぞ。</p>
            <div className='mt-8'>
              <SnsIcons />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Top;
