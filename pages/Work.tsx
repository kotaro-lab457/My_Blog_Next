import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Layout, { TitleText } from "../components/layout";

import { Grid, Paper } from "@material-ui/core";

const work = {
  width: "80vw",
  height: "85vh",
  margin: "0 auto",
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
        <TitleText>
          <h1>Work</h1>
        </TitleText>
        <div style={work}>
          <Grid container justify="space-around">
            <Grid item xs={5}>
              <Paper elevation={3}>
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
              </Paper>
            </Grid>
            <Grid item xs={5}>
              <Paper elevation={3}>
                <div style={workItem}>
                  <h2 style={workItemTitle}>共同開発</h2>
                  <p>チャットアプリ</p>
                  <Image
                    priority
                    src="/images/team_codevillage.png"
                    width={600}
                    height={300}
                  />
                  <p>共同開発の制作アプリ／Githubを使用した共同開発</p>
                  <p>※リンクはありません</p>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Layout>
    </>
  );
};

export default Work;
