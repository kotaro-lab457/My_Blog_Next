import React from "react";
import Link from "next/link";
import Image from "next/image";

import Date from "./date";

interface listProps {
  list: {
    title: string;
    id: string;
    thumb: string;
    date: string;
  };
}

const smallTime = {
  display: "block",
};

const Article: React.FC<listProps> = (props) => {
  return (
    <>
      <div>
        <Link href={`/posts/${props.list.id}`}>
          <Image
            priority
            src={`/images/${props.list.thumb}`}
            height={230}
            width={280}
          />
        </Link>
        <small style={smallTime}>
          <Date dateString={props.list.date} />
        </small>
        <Link href={`/posts/${props.list.id}`}>
          <p>{props.list.title}</p>
        </Link>
      </div>
    </>
  );
};

export default Article;
