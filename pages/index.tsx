import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";
import { Top } from "./Top";
import Article from "../components/article";

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
  width: "70vw",
  margin: "0 auto",
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
        <h2>Blog Posts</h2>
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
    </Layout>
  );
}
