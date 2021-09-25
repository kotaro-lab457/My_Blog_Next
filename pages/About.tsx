import React from "react";
import Image from "next/image";
import Head from "next/head";

import Layout, { siteTitle, TitleText } from "@Components/Layout";
import WorkItems from "@Components/WorkItems";

import { AiFillFileText } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaCode, FaUserCheck } from "react-icons/fa";
import { BsCollectionPlayFill } from "react-icons/bs";
import { FcEngineering } from "react-icons/fc";

import SnsIcons from "@Components/SnsIcons";

const about = {
  width: "50vw",
  margin: "0 auto",
};

const aboutMine = {
  display: "flex",
  padding: "10px 50px",
};

const aboutMe = {
  margin: "1rem 0 0 2rem",
};

const aboutText = {
  marginLeft: "1rem",
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
  margin: "0 0 1rem 1rem",
};

const avatar = {
  width: "120px",
  height: "120px",
};

const About: React.FC = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <TitleText>
          <h1>About me</h1>
        </TitleText>
        <div style={about}>
          <div>
            <div style={textTitle}>
              <span style={textIcon}>
                <FaUserCheck />
              </span>
              <h3>プロフィール</h3>
            </div>
            <div style={aboutMine}>
              <div style={avatar}>
                <Image
                  priority
                  src="/images/catcat.png"
                  height={144}
                  width={144}
                />
              </div>
              <div style={aboutMe}>
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
            <div style={aboutText}>
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
              <ul>
                <li>
                  <p>言語</p>
                  <p>HTML5 / CSS3(Scss) / JavaScript / TypeScript</p>
                </li>
                <li>
                  <p>フレームワーク・ライブラリ</p>
                  <p>jQuery / React / Redux(Redux Toolkit) / Vue / Vuex / Next.js / webpack</p>
                </li>
                <li>
                  <p>その他技術</p>
                  <p>
                    Git / Github / FireBase / styled-component (Atomic Design) /
                    Google Books API / Twitter API
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <div style={textTitle}>
                <span style={codeIcon}>
                  <FcEngineering />
                </span>
                <h3>個人・チーム開発</h3>
              </div>
              <WorkItems />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
