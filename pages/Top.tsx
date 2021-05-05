import React from "react";
import Image from "next/image";

export const Top: React.FC = () => {
  return (
    <>
      <section>
        <p>Suzuki Kotaro</p>
        <Image priority src="/images/profile.png" height={144} width={144} />
        <p>現在、エンジニア転職を目指して転職活動中です！</p>
        <p>
          フロントエンドを選考しており、React
          ,TypeScriptを中心に学習しています。
        </p>
      </section>
    </>
  );
};
