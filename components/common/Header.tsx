import React from "react";
import Link from "next/link";

import { AppBar, Toolbar, Tabs, Tab } from "@material-ui/core";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineCheckCircle,
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
};

export const Header: React.FC = () => {
  return (
    <>
      <header>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <div style={header}>
              <h1 style={title}>Kotaro Blog</h1>
              <Tabs>
                <Link href="/">
                  <Tab label="Top" icon={<AiOutlineHome />} style={link} />
                </Link>
                <Link href="/About">
                  <Tab label="About" icon={<AiOutlineUser />} style={link} />
                </Link>
                <Link href="/Blog">
                  <Tab label="Blog" icon={<CgNotes />} style={link} />
                </Link>
                <Link href="/Work">
                  <Tab
                    label="Work"
                    icon={<AiOutlineCheckCircle />}
                    style={link}
                  />
                </Link>
              </Tabs>
            </div>
          </Toolbar>
        </AppBar>
      </header>
    </>
  );
};
