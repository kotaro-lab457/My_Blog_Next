import React from "react";
import Image from "next/image";

import { Paper, Button } from "@material-ui/core";

const time = {
  display: "block",
};

const tag = {
  width: "230px",
};

const text: { [key: string]: string } = {
  paddingLeft: "10px",
  textTransform: "capitalize",
};

const font = {
  margin: "5px 0",
};

const button = {
  padding: "0",
  margin: "1rem",
};

const Qiita: React.FC = () => {
  return (
    <>
      <div>
        <div></div>
      </div>
      <Button
        href="https://qiita.com/s_taro/items/53c3899610e6132ab8a2"
        style={button}
      >
        <Paper elevation={3} style={tag}>
          <Image
            priority
            src="/images/qiita_2021.png"
            height={150}
            width={230}
          />
          <div style={text}>
            <small style={time}> May 5, 2021</small>
            <p style={font}>フロントエンドエンジニア志望のAWS基礎学習〜</p>
          </div>
        </Paper>
      </Button>
      <Button
        href="https://qiita.com/s_taro/items/57526ebb9c97a46a53f7"
        style={button}
      >
        <Paper elevation={3} style={tag}>
          <Image
            priority
            src="/images/qiita_2021.png"
            height={150}
            width={230}
          />
          <div style={text}>
            <small style={time}> April 14, 2021</small>
            <p style={font}>はじめてのWebpack設定 本番用 開発用</p>
          </div>
        </Paper>
      </Button>
      <Button
        href="https://qiita.com/s_taro/items/bb607598d8eb45c70d39"
        style={button}
      >
        <Paper elevation={3} style={tag}>
          <Image
            priority
            src="/images/qiita_2021.png"
            height={150}
            width={230}
          />
          <div style={text}>
            <small style={time}> April 6, 2021</small>
            <p style={font}>
              初心者がReact, TypeScript, Firebaseを使用し、読書...
            </p>
          </div>
        </Paper>
      </Button>
      <Button
        href="https://qiita.com/s_taro/items/0678553a196e20a1ae08"
        style={button}
      >
        <Paper elevation={3} style={tag}>
          <Image
            priority
            src="/images/qiita_2021.png"
            height={150}
            width={230}
          />
          <div style={text}>
            <small style={time}>March 10, 2021</small>
            <p style={font}>
              FirebaseのコレクションのドキュメントIDを自ら生成し...
            </p>
          </div>
        </Paper>
      </Button>
      <Button
        href="https://qiita.com/s_taro/items/30114cfa370aac6c085f"
        style={button}
      >
        <Paper elevation={3} style={tag}>
          <Image
            priority
            src="/images/qiita_2021.png"
            height={150}
            width={230}
          />
          <div style={text}>
            <small style={time}> February 26, 2021</small>
            <p style={font}>axiosの基本的な使い方</p>
            <br />
          </div>
        </Paper>
      </Button>
      <Button
        href="https://qiita.com/s_taro/items/1a2e8a07ba5ad5f18e04"
        style={button}
      >
        <Paper elevation={3} style={tag}>
          <Image
            priority
            src="/images/qiita_2021.png"
            height={150}
            width={230}
          />
          <div style={text}>
            <small style={time}> February 11, 2021</small>
            <p style={font}>JSの非同期処理（Promise、async、await）に...</p>
          </div>
        </Paper>
      </Button>
      <Button
        href="https://qiita.com/s_taro/items/0d2686b55593f59309cc"
        style={button}
      >
        <Paper elevation={3} style={tag}>
          <Image
            priority
            src="/images/qiita_2021.png"
            height={150}
            width={230}
          />
          <div style={text}>
            <small style={time}> February 26, 2021</small>
            <p style={font}>create-react-appの中身の概要（package.json...</p>
          </div>
        </Paper>
      </Button>
    </>
  );
};

export default Qiita;
