import React from "react";
import Link from "next/link"

import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";

import { CgNotes } from "react-icons/cg";

const header = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "10px 4rem",
};

const title = {
  fontSize: "3rem",
  fontFamily: "Apple Chancery",
  margin: "0",
};

const link = {
  fontSize: "1rem",
  color: "#000",
  minWidth: "100px",
  width: "120px",
};

const Header: React.FC = () => {
  return (
    <>
      <header>
        <div>
          <div>
            <div style={header}>
              <h1 style={title}>Kotaro Blog</h1>
              <div>
                <Link
                  href="/"
                >ホーム</Link>
                <Link
                  href="/Blog"
                >ブログ</Link>
                <Link
                  href="/About"
                >about</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;