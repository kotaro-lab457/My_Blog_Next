import { GetStaticProps } from "next";

import Thumb from "@Components/Thumb";

import { getSortedPostsData } from "@Lib/posts";
import { allPostsData, List } from "@Modules";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    },
  };
};


const blogPage = {
  width: "65vw",
  margin: "4rem auto",
  borderTop: "1px solid #000",
};

const blogTitle = {
  padding: "0 3rem",
};

const list = {
  listStyle: "none",
  display: "flex",
  cursor: "pointer",
};

const item = {
  width: "300px",
  margin: "20px",
};

export default function Posts({ allPostsData}: {allPostsData: allPostsData}) {
  const data: any = allPostsData;
  return (
    <>
      <div style={blogPage}>
        <h2 style={blogTitle}>Blog Posts</h2>
        <section>
          <ul style={list}>
            {data.map((list:List, id:number) => (
              <li key={id} style={item}>
                <Thumb list={list} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}