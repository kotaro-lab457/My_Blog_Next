import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const workItem = {
  padding: '2rem',
};

const workItemTitle: { [key: string]: string } = {
  textAlign: 'center',
};

const WorkItems: React.FC = () => {
  return (
    <>
      <div className='mx-auto'>
        <div>
          <div className=''>
            <h2 style={workItemTitle}>Read Out</h2>
            <p>読書アウトプットアプリ</p>
            <Image priority alt='portfolio' src='/images/read_out.jpeg' width={600} height={300} />
            <p>読書した内容をアウトプット＆共有するアプリ</p>
            <p>
              詳細については
              <Link href='/ReadApp'>こちら</Link>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div style={workItem}>
            <h2 style={workItemTitle}>共同開発</h2>
            <p>チャットアプリ。</p>
            <Image
              priority
              alt='codevillage'
              src='/images/team_codevillage.jpeg'
              height={300}
              width={600}
            />
            <p>共同開発の制作アプリ／Githubを使用した共同開発</p>
            <p>※リンクはありません。</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkItems;
