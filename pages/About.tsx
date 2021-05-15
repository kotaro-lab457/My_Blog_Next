import React from "react";
import Image from "next/image";
import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";

import { AiFillFileText } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaCode, FaUserCheck } from "react-icons/fa";
import { BsCollectionPlayFill } from "react-icons/bs";
import { FcEngineering } from "react-icons/fc";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import SnsIcons from "../components/icons/SnsIcons";

const about = {
  width: "50vw",
  margin: "0 auto",
};

const aboutMine = {
  display: "flex",
  padding: "10px 50px",
};

const aboutText = {
  margin: "1rem 0 0 2rem",
};

const textTitle = {
  display: "flex",
};

const textIcon = {
  fontSize: "2rem",
  padding: "10px 15px 0 0",
};

const codeIcon = {
  color: "#00b0ff",
  fontSize: "2rem",
  padding: "10px 15px 0 0",
};

const snsIcons = {
  marginBottom: "1rem",
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
            <div style={textTitle}>
              <span style={textIcon}>
                <FaUserCheck />
              </span>
              <h3>プロフィール</h3>
            </div>
            <div style={aboutMine}>
              <Avatar className={classes.middle}>
                <Image
                  priority
                  src="/images/profile.jpeg"
                  height={144}
                  width={144}
                />
              </Avatar>
              <div style={aboutText}>
                <p>鈴木孝太郎（すずき こうたろう）</p>
                <p>1997年05月15日生まれ / 24歳</p>
              </div>
            </div>
            <div style={textTitle}>
              <span style={textIcon}>
                <BiWorld />
              </span>
              <h3>SNS</h3>
            </div>
            <div style={snsIcons}>
              <SnsIcons />
            </div>
            <div style={textTitle}>
              <span style={textIcon}>
                <BsCollectionPlayFill />
              </span>
              <h3>趣味</h3>
            </div>
            <div>
              <p>
                テニス🎾 / サウナ🧖‍♀️ / 読書📕 / キャンプ🏕 / 山登り⛰ / Netflix🎦
                などなど　
              </p>
            </div>
            <div>
              <div style={textTitle}>
                <span style={textIcon}>
                  <AiFillFileText />
                </span>
                <h3>経歴</h3>
              </div>
              <ul>
                <li>2016年4月 〜 2020年3月：株式会社トーエネック</li>
                <li>2013年4月 〜 2016年3月：愛知県立春日井工業高校</li>
              </ul>
            </div>
            <div>
              <div style={textTitle}>
                <span style={codeIcon}>
                  <FaCode />
                </span>
                <h3>プログラミングスキル</h3>
              </div>
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
            <div>
              <div style={textTitle}>
                <span style={textIcon}>
                  <FcEngineering />
                </span>
                <h3>エンジニアとしての一つの目標</h3>
              </div>
              <p>
                僕は本番に緊張したり、不安を抱え込みやすくていろいろ余計なことを考えてしまい心配性な一面があります。
                <br />
                そんな時に、マインドフルネス瞑想や筋トレを行い、自分としっかり向き合うことで思考が整理され行動に自信がつき新しい体験や行動力に繋がりました。
                <br />
                <br />
                人生を大きく変えてくれた瞑想や筋トレをITサービスで不安症や精神的に弱い人たちの気持ちを少しでも改善し、より良い人生に変わるようなサービスを提供することで
                一人でも多くの方に使っていただきたいという目標があります。
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
