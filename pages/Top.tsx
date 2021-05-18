import React from "react";
import Image from "next/image";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import SnsIcons from "../components/icons/SnsIcons";

const myName = {
  fontFamily: "Courier New",
};

const topPage = {
  display: "flex",
  margin: "3rem auto",
  width: "50vw",
};

const top = {
  // background: "#ebebeb",
  padding: "1rem 0",
};

const titleName = {
  fontSize: "5rem",
  fontFamily: "Apple Chancery",
};

const titleTag: { [key: string]: string } = {
  position: "absolute",
  top: "20%",
  left: "38%",
};

const background: { [key: string]: string } = {
  width: "100%",
  height: "50vh",
  position: "relative",
};

const image = {
  width: "100%",
  height: "100%",
};

const useStyles = makeStyles((theme) => ({
  middle: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
}));

const snsIcons: { [key: string]: string } = {
  textAlign: "right",
};

export const Top: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div style={background}>
        <img style={image} src={`/images/2021sky-bg.png`} alt="" />
      </div>
      <div style={titleTag}>
        <h2 style={titleName}>Kotaro Blog</h2>
      </div>
      <div style={top}>
        <section style={topPage}>
          <div>
            <Avatar className={classes.middle}>
              <Image
                priority
                src="/images/profile.jpeg"
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
            <div style={snsIcons}>
              <SnsIcons />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
