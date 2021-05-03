import React from "react";
import Image from "next/image";

export const About: React.FC = () => {
  return (
    <>
      <h2>About</h2>
      <>
        <Image priority src="/images/profile.png" height={144} width={144} />
      </>
      <p>自己紹介〜</p>
      <div>
        <p>プロフィール</p>
        <p>趣味</p>
        <div>
          <p>経歴</p>
          <div>
            <p>会社</p>
            <p>出身校</p>
          </div>
        </div>
        <p>勉強推移</p>
        <div></div>
        <p>プログラミングスキル</p>
        <div></div>
      </div>
    </>
  );
};
