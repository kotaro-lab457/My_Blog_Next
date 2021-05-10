import React from "react";
import Image from "next/image";
import Link from "next/link";

import img from "./img/img_sky.png";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const myName = {
  fontFamily: "Courier New",
};

const image = {
  width: "100%",
  height: "500px",
  backgroundImage: `url(${img})`,
};

const topPage = {
  display: "flex",
  margin: "0 3rem",
};

const useStyles = makeStyles((theme) => ({
  middle: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
}));

export const Top: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div style={image}></div>
      <section style={topPage}>
        <div>
          <Avatar className={classes.middle}>
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
