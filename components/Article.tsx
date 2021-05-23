import React from "react";
import Image from "next/image";

import Date from "./date";

import { Paper, Button } from "@material-ui/core";

interface listProps {
  list: {
    title: string;
    id: string;
    thumb: string;
    date: string;
  };
}

const blogText: { [key: string]: string } = {
  textAlign: "left",
  paddingLeft: "10px",
};

const blogTile = {
  padding: "0",
};

const blogTitle = {
  margin: "5px 0",
};

export const Article: React.FC<listProps> = (props) => {
  return (
    <>
      <Button style={blogTile} href={`/posts/${props.list.id}`}>
        <Paper elevation={3}>
          <Image
            priority
            src={`/images/${props.list.thumb}`}
            height={200}
            width={300}
          />
          <div style={blogText}>
            <small>
              <Date dateString={props.list.date} />
            </small>
            <p style={blogTitle}>{props.list.title}</p>
          </div>
        </Paper>
      </Button>
    </>
  );
};
