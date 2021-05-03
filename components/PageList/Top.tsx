import React from "react";
import Image from "next/image";

export const Top: React.FC = () => {
  return (
    <>
      <section>
        <p>Suzuki Kotaro</p>
        <Image priority src="/images/profile.png" height={144} width={144} />
      </section>
    </>
  );
};
