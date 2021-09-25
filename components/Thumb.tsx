import React from "react";
import Image from "next/image";
import Link from "next/link";

import Date from "./Time";

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
      <Link href={`/posts/${props.list.paths}`}>
        <div>
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
        </div>
      </Link>
    </>
  );
};

export default Thumb;