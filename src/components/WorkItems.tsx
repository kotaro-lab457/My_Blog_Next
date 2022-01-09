import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const work = {
  margin: '0 auto',
};

const workItem = {
  padding: '2rem',
};

const workItemTitle: { [key: string]: string } = {
  textAlign: 'center',
};

const WorkItems: React.FC = () => {
  return (
    <>
      <div style={work}>
        <div>
          <div>
            <div>
              <div style={workItem}>
                <h2 style={workItemTitle}>Read Out</h2>
                <p>読書アウトプットアプリ</p>
                <Image priority src='/images/read_out.jpeg' width={600} height={300} />
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
                <Image priority src='/images/team_codevillage.jpeg' width={600} height={300} />
                <p>共同開発の制作アプリ／Githubを使用した共同開発</p>
                <p>※リンクはありません。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkItems;
