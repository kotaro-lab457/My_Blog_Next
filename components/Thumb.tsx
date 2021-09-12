import React from "react";
import Image from "next/image";

import Date from "./Time";

import { Paper, Button } from "@material-ui/core";
import { listProps } from "@Modules"

const blogText: { [key: string]: string } = {
  textAlign: "left",
  paddingLeft: "10px",
};

const blogTile = {
  padding: "0",
};

const blogTitle: { [key: string]: string } = {
  margin: "5px 0",
  textTransform: "none",
};

const initText: { [key: string]: string } = {
  textTransform: "none",
};

const Thumb: React.FC<listProps> = (props) => {
  return (
    <>
      <Button style={blogTile} href={`/posts/${props.list.paths}`}>
        <Paper elevation={3}>
          <Image
            priority
            src={`/images/${props.list.thumb}`}
            height={200}
            width={300}
          />
          <div style={blogText}>
            <small style={initText}>
              <Date dateString={props.list.date} />
            </small>
            <p style={blogTitle}>{props.list.category}</p>
            <p style={blogTitle}>{props.list.title}</p>
          </div>
        </Paper>
      </Button>
    </>
  );
};

export default Thumb;