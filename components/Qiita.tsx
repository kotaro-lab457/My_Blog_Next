import React from "react";
import Image from "next/image";

import { Paper, Button } from "@material-ui/core";

const text = {
  display: "block",
};

const Qiita: React.FC = () => {
  return (
    <>
      <Button href="https://qiita.com/s_taro/items/53c3899610e6132ab8a2">
        <Paper elevation={3}>
          <Image
            priority
            src="/images/qiita_2021.png"
            height={150}
            width={250}
          />
          <small style={text}> May 5, 2021</small>
          <p>フロントエンドエンジニア志望のAWS基礎学習〜</p>
        </Paper>
      </Button>
    </>
  );
};

export default Qiita;
