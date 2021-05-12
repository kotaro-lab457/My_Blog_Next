import React from "react";
import Link from "next/link";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineCheckCircle,
} from "react-icons/ai";

const header = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "0 5rem",
};

const title = {
  fontSize: "3rem",
  fontFamily: "Apple Chancery",
  margin: "0",
};

const link = {
  fontSize: "1.2rem",
  color: "#000",
  margin: "30px 20px 20px ",
  display: "inline-block",
};

const linkIcon = {
  paddingRight: "5px",
  paddingTop: "5px",
  display: "inline-block",
};

export const Header: React.FC = () => {
  return (
    <>
      <header style={header}>
        <h1 style={title}>Kotaro Blog</h1>
        <div>
          <Link href="/">
            <a style={link}>
              <span style={linkIcon}>
                <AiOutlineHome />
              </span>
              Top
            </a>
          </Link>
          <Link href="/About">
            <a style={link}>
              <span style={linkIcon}>
                <AiOutlineUser />
              </span>
              About
            </a>
          </Link>
          <Link href="/Blog">
            <a style={link}>Blog</a>
          </Link>
          <Link href="/Work">
            <a style={link}>
              <span style={linkIcon}>
                <AiOutlineCheckCircle />
              </span>
              Work
            </a>
          </Link>
        </div>
      </header>
    </>
  );
};
