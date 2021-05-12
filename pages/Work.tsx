import React from "react";
import Image from "next/image";
import Link from "next/link";

import Layout from "../components/layout";
import Head from "next/head";

const work = {
  width: "80vw",
  height: "85vh",
  margin: "0 auto",
};

const workList = {
  display: "flex",
  justifyContent: "space-between",
};

const workItem = {
  padding: "2rem",
};

const workItemTitle: { [key: string]: string } = {
  textAlign: "center",
};

const Work: React.FC = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>S.kotaro Work site</title>
        </Head>
        <div style={work}>
          <h2>Work</h2>
          <div style={workList}>
            <div style={workItem}>
              <h2 style={workItemTitle}>portfolio</h2>
              <p>読書アウトプットアプリ</p>
              <Image
                priority
                src="/images/portfolio_page.png"
                width={600}
                height={300}
              />
              <p>転職活動用のポートフォリオ</p>
              <p>
                詳細については
                <Link href="/Portfolio">こちら</Link>
              </p>
            </div>
            <div style={workItem}>
              <h2 style={workItemTitle}>共同開発</h2>
              <p>チャットアプリ</p>
              <Image
                priority
                src="/images/team_codevillage.png"
                width={600}
                height={300}
              />
              <p>
                チーム開発の制作アプリ ／Githubを使用して共同開発を行いました。
              </p>
              <p>※リンクはありません</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Work;
