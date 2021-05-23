import React from "react";

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
  width: "120px",
};

export const Header: React.FC = () => {
  return (
    <>
      <header>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <div style={header}>
              <h1 style={title}>Kotaro Blog</h1>
              <div>
                <Tab
                  label="Top"
                  icon={<AiOutlineHome />}
                  style={link}
                  href="/"
                />
                <Tab
                  label="About"
                  icon={<AiOutlineUser />}
                  style={link}
                  href="/About"
                />
                <Tab
                  label="Blog"
                  icon={<CgNotes />}
                  style={link}
                  href="/Blog"
                />
                <Tab
                  label="Work"
                  icon={<AiOutlineCheckCircle />}
                  style={link}
                  href="/Work"
                />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </header>
    </>
  );
};
