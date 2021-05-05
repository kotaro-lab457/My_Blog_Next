import React from "react";
import Image from "next/image";

export const About: React.FC = () => {
  return (
    <>
      <h2>About</h2>
      <>
        <Image priority src="/images/profile.png" height={144} width={144} />
      </>
      <h2>〜自己紹介〜</h2>
      <p>鈴木孝太郎（すずき こうたろう）</p>
      <p>1997年05月15日生まれ / 24歳</p>
      <div>
        <h2>プロフィール</h2>
        <p>趣味</p>
        <div>
          <p>
            テニス🎾 / サウナ🧖‍♀️ / 読書📕 / キャンプ🏕 / 山登り⛰ / Netflix🎦
            などなど　
          </p>
        </div>
        <div>
          <h2>経歴</h2>
          <ul>
            <li>2016年4月 〜 2020年3月：株式会社トーエネック</li>
            <li>2013年4月 〜 2016年3月：愛知県立春日井工業高校</li>
          </ul>
        </div>
        <div>
          <h2>プログラミングスキル</h2>
          <p>言語</p>
          <p>HTML5 / CSS3(Scss) / JavaScript / TypeScript</p>
          <p>フレームワーク</p>
          <p>React / Redux / Redux Toolkit / Next.js / webpack</p>
          <p>その他技術</p>
          <p>
            Git / Github / FireBase / styled-component (Atomic Design) / Google
            Books API / Twitter API
          </p>
        </div>
      </div>
    </>
  );
};
