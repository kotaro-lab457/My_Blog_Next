import React from "react";
import Link from "next/link";

const header = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "0 2rem",
};

const title = {
  fontSize: "2rem",
  fontFamily: "Apple Chancery",
};

const link = {
  margin: "20px",
  display: "inline-block",
};

export const Header: React.FC = () => {
  return (
    <>
      <header style={header}>
        <h1 style={title}>Kotaro Blog</h1>
        <div>
          <Link href="/">
            <a style={link}>Top</a>
          </Link>
          <Link href="/About">
            <a style={link}>About</a>
          </Link>
          <Link href="/Blog">
            <a style={link}>Blog</a>
          </Link>
          <Link href="/Work">
            <a style={link}>Work</a>
          </Link>
        </div>
      </header>
    </>
  );
};
