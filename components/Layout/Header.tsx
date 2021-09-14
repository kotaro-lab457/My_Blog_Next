import React from "react";

import { AppBar, Toolbar, Tab } from "@material-ui/core";

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
                  label="Blog"
                  icon={<CgNotes />}
                  style={link}
                  href="/Blog"
                />
                <Tab
                  label="About"
                  icon={<AiOutlineUser />}
                  style={link}
                  href="/About"
                />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </header>
    </>
  );
};

export default Header;