import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";
import { Top } from "./Top";
import Article from "../components/article";
import Qiita from "../components/Qiita";

import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const blogPage = {
  width: "60vw",
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

export default function Home({ allPostsData }) {
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
            {allPostsData.map((list, id) => (
              <li key={id} style={item}>
                <Article list={list} />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div style={blogPage}>
        <h2 style={blogTitle}>Qiita</h2>
        <Qiita />
      </div>
    </Layout>
  );
}
