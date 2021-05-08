import React from "react";
import Image from "next/image";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const myName = {
  fontFamily: "Courier New",
};

const topPage = {
  display: "flex",
};

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
}));

export const Top: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <section style={topPage}>
        <div>
          <Avatar className={classes.large}>
            <Image
              priority
              src="/images/profile.png"
              height={144}
              width={144}
            />
          </Avatar>
          <h2 style={myName}>Suzuki Kotaro</h2>
        </div>
        <div>
          <p>現在、エンジニア転職を目指して転職活動中です！</p>
          <p>
            フロントエンドを選考しており、React
            ,TypeScriptを中心に学習しています。
          </p>
          <p>
            ポートフォリオは
            <Link href="/Portfolio">こちら</Link>
            になります。
          </p>
        </div>
      </section>
    </>
  );
};
