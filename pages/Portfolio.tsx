import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout from "../components/layout";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>S.kotaro portfolio site</title>
      </Head>
      <Layout>
        <div>
          <h2>Read Out</h2>
          <p>読書アウトプットWebアプリ</p>
          <div>
            <Image
              priority
              src="/images/portfolio_page.png"
              width={1000}
              height={500}
            />
          </div>
          <div>
            <Link href="https://github.com/kotaro-lab457/MyPortfolio">
              ソースコード
            </Link>
            <p>
              URL：
              <Link href="https://my-portfolio-986db.web.app/">
                https://my-portfolio-986db.web.app/
              </Link>
            </p>
            <p>主な使用技術</p>
            <p>
              TypeScript / React / Redux / Atomic Design / Firebase / Google
              Books API
            </p>
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

export default Portfolio;
