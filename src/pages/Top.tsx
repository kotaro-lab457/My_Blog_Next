import React from 'react';
import Image from 'next/image';
import SnsIcons from '@Components/SnsIcons';

const topPage = {
  display: 'flex',
  margin: '3rem auto',
  width: '50vw',
};

const Top: React.FC = () => {
  return (
    <>
      <div className='relative'>
        <div className='w-full h-40'>
          <img className='w-full h-full' src={`/images/2021sky-bg.jpeg`} />
        </div>
        <div className='w-full absolute top-10'>
          <h2 className='text-6xl font-Apple text-center'>Kotaro Blog</h2>
        </div>
      </div>
      <div className='py-10'>
        <section className='flex justify-center'>
          <div>
            <Image
              priority
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
