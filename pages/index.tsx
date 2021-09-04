import Head from "next/head";
import { GetStaticProps } from "next";

import Layout, { siteTitle } from "@Components/Layout";
import Top from "./Top";
import Thumb from "@Components/Thumb";
import Article from "@Components/Article";

import { getSortedPostsData } from "@Lib/posts";
import { List } from "@Modules"

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
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

export default function Home({ allPostsData }: any) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Top />
      <div style={blogPage}>
        <h2 style={blogTitle}>Blog Posts</h2>
        <section>
          <ul style={list}>
            {allPostsData.map((list:List, id:number) => (
              <li key={id} style={item}>
                <Thumb list={list} />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Article />
    </Layout>
  );
}
