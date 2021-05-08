import React from "react";
import Image from "next/image";
import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const about = {
  padding: "0 4rem",
};

const aboutMine = {
  display: "flex",
  padding: "10px 50px",
};

const aboutText = {
  marginLeft: "2rem",
};

const useStyles = makeStyles((theme) => ({
  middle: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
}));

const About: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div style={about}>
          <h2>〜自己紹介〜</h2>
          <div>
            <h3>プロフィール</h3>
            <div style={aboutMine}>
              <Avatar className={classes.middle}>
                <Image
                  priority
                  src="/images/profile.png"
                  height={144}
                  width={144}
                />
              </Avatar>
              <div style={aboutText}>
                <p>鈴木孝太郎（すずき こうたろう）</p>
                <p>1997年05月15日生まれ / 24歳</p>
              </div>
            </div>
            <h3>趣味</h3>
            <div>
              <p>
                テニス🎾 / サウナ🧖‍♀️ / 読書📕 / キャンプ🏕 / 山登り⛰ / Netflix🎦
                などなど　
              </p>
            </div>
            <div>
              <h3>経歴</h3>
              <ul>
                <li>2016年4月 〜 2020年3月：株式会社トーエネック</li>
                <li>2013年4月 〜 2016年3月：愛知県立春日井工業高校</li>
              </ul>
            </div>
            <div>
              <h3>プログラミングスキル</h3>
              <p>言語</p>
              <p>HTML5 / CSS3(Scss) / JavaScript / TypeScript</p>
              <p>フレームワーク</p>
              <p>React / Redux / Redux Toolkit / Next.js / webpack</p>
              <p>その他技術</p>
              <p>
                Git / Github / FireBase / styled-component (Atomic Design) /
                Google Books API / Twitter API
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
