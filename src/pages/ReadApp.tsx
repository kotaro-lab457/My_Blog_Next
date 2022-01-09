import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@Components/Layout';

const portfolio = {
  width: '60vw',
  margin: '2rem auto',
};

const ReadApp = () => {
  return (
    <>
      <Head>
        <title>S.kotaro portfolio site</title>
      </Head>
      <Layout>
        <div style={portfolio}>
          <h1>Read Out</h1>
          <p>読書アウトプットWebアプリ</p>
          <div>
            <Image priority src='/images/read_out.jpeg' width={1000} height={500} />
          </div>
          <div>
            <p>
              Github：
              <Link href='https://github.com/kotaro-lab457/ReadOut'>ソースコード</Link>
            </p>
            <p>
              Qiita解説記事は
              <Link href='https://qiita.com/s_taro/items/bb607598d8eb45c70d39'>こちら</Link>
            </p>
            <p>
              URL：
              <Link href='https://my-portfolio-986db.web.app/'>
                https://my-portfolio-986db.web.app/
              </Link>
            </p>
            <p>主な使用技術</p>
            <p>TypeScript / React / Redux / Atomic Design / Firebase / Google Books API</p>
            <p>工夫した点</p>
            <ul>
              <li>
                Chart.jsを使用し、日付に応じて投稿した数をグラフ化し毎日の読書量をフィードバック
              </li>
              <li>Firebaseでデータの保存・取得・編集・削除機能を実装</li>
              <li>投稿時に読んだタイトルに合わせた本の画像を表示</li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ReadApp;
