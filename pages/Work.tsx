import React from "react";
import Image from "next/image";

import Layout from "../components/layout";
import Head from "next/head";

const Work: React.FC = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>S.kotaro Work site</title>
        </Head>
        <h2>Work</h2>
        <div>
          <h2>portfolio</h2>
          <p>読書アウトプットアプリ</p>
          <Image
            priority
            src="/images/portfolio_page.png"
            width={300}
            height={150}
          />
        </div>
        <div>
          <h2>共同開発</h2>
          <p>チャットアプリ</p>
          <Image
            priority
            src="/images/team_codevillage.png"
            width={300}
            height={150}
          />
        </div>
      </Layout>
    </>
  );
};

export default Work;
