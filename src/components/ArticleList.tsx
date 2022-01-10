import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArticleList: React.FC = () => {
  return (
    <>
      <h2 className='text-center text-4xl'>Qiita</h2>
      <section
        className='
        w-4/5 mt-8 mx-auto
        border-t border-gray-600
      '
      >
        <article className='flex justify-between flex-wrap'>
          <Link href='https://qiita.com/s_taro/items/53c3899610e6132ab8a2' passHref>
            <div className='w-64 mt-8 cursor-pointer shadow-lg pb-2'>
              <Image
                priority
                alt='articles qiita'
                src='/images/qiita_2021.png'
                height={200}
                width={300}
              />
              <div className='mt-3 px-2'>
                <small> May 5, 2021</small>
                <p className='mt-2'>フロントエンドエンジニア志望のAWS基礎学習〜</p>
              </div>
            </div>
          </Link>
          <Link href='https://qiita.com/s_taro/items/53c3899610e6132ab8a2' passHref>
            <div className='w-64 mt-8 cursor-pointer shadow-lg pb-2'>
              <Image
                priority
                alt='articles qiita'
                src='/images/qiita_2021.png'
                height={200}
                width={300}
              />
              <div className='mt-3 px-2'>
                <small> May 5, 2021</small>
                <p className='mt-2'>フロントエンドエンジニア志望のAWS基礎学習〜</p>
              </div>
            </div>
          </Link>
          <Link href='https://qiita.com/s_taro/items/57526ebb9c97a46a53f7' passHref>
            <div className='w-64 mt-8 cursor-pointer shadow-lg pb-2'>
              <Image
                priority
                alt='articles qiita'
                src='/images/qiita_2021.png'
                height={200}
                width={300}
              />
              <div className='mt-3 px-2'>
                <small> April 14, 2021</small>
                <p className='mt-2'>はじめてのWebpack設定 本番用 開発用</p>
              </div>
            </div>
          </Link>
          <Link href='https://qiita.com/s_taro/items/bb607598d8eb45c70d39' passHref>
            <div className='w-64 mt-8 cursor-pointer shadow-lg pb-2'>
              <Image
                priority
                alt='articles qiita'
                src='/images/qiita_2021.png'
                height={200}
                width={300}
              />
              <div className='mt-3 px-2'>
                <small> April 6, 2021</small>
                <p className='mt-2'>初心者がReact, TypeScript, Firebaseを使用し、読書...</p>
              </div>
            </div>
          </Link>
          <Link href='https://qiita.com/s_taro/items/0678553a196e20a1ae08' passHref>
            <div className='w-64 mt-8 cursor-pointer shadow-lg pb-2'>
              <Image
                priority
                alt='articles qiita'
                src='/images/qiita_2021.png'
                height={200}
                width={300}
              />
              <div className='mt-3 px-2'>
                <small>March 10, 2021</small>
                <p className='mt-2'>FirebaseのコレクションのドキュメントIDを自ら生成し...</p>
              </div>
            </div>
          </Link>
          <Link href='https://qiita.com/s_taro/items/30114cfa370aac6c085f' passHref>
            <div className='w-64 mt-8 cursor-pointer shadow-lg pb-2'>
              <Image
                priority
                alt='articles qiita'
                src='/images/qiita_2021.png'
                height={200}
                width={300}
              />
              <div className='mt-3 px-2'>
                <small> February 26, 2021</small>
                <p className='mt-2'>axiosの基本的な使い方</p>
                <br />
              </div>
            </div>
          </Link>
          <Link href='https://qiita.com/s_taro/items/1a2e8a07ba5ad5f18e04' passHref>
            <div className='w-64 mt-8 cursor-pointer shadow-lg pb-2'>
              <Image
                priority
                alt='articles qiita'
                src='/images/qiita_2021.png'
                height={200}
                width={300}
              />
              <div className='mt-3 px-2'>
                <small> February 11, 2021</small>
                <p className='mt-2'>JSの非同期処理（Promise、async、await）に...</p>
              </div>
            </div>
          </Link>
          <Link href='https://qiita.com/s_taro/items/0d2686b55593f59309cc' passHref>
            <div className='w-64 mt-8 cursor-pointer shadow-lg pb-2'>
              <Image
                priority
                alt='articles qiita'
                src='/images/qiita_2021.png'
                height={200}
                width={300}
              />
              <div className='mt-3 px-2'>
                <small> February 26, 2021</small>
                <p className='mt-2'>create-react-appの中身の概要（package.json...</p>
              </div>
            </div>
          </Link>
        </article>
      </section>
    </>
  );
};

export default ArticleList;
