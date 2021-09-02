import React from "react";
import Image from "next/image";

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

const avatar = {
  width: "120px",
  height: "120px",
};

const snsIcons: { [key: string]: string } = {
  textAlign: "right",
};

const Top: React.FC = () => {
  return (
    <>
      <div style={background}>
        <img style={image} src={`/images/2021sky-bg.jpeg`} alt="" />
      </div>
      <div style={titleTag}>
        <h2 style={titleName}>Kotaro Blog</h2>
      </div>
      <div style={top}>
        <section style={topPage}>
          <div>
            <Avatar style={avatar}>
              <Image
                priority
                src="/images/catcat.png"
                height={144}
                width={144}
              />
            </Avatar>
            <h2 style={myName}>Suzuki Kotaro</h2>
          </div>
          <div>
            <p>現在、SES企業に勤めている新米エンジニアです。</p>
            <p>
              日々の学習や娯楽についてちょこちょこ発信。よろしくどうぞ。
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

export default Top;
