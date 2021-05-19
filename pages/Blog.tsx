import React from "react";
import Head from "next/head";

import Layout, { TitleText } from "../components/layout";

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
  minHeight: "70vh",
  width: "70vw",
  margin: "0 auto",
};

const list = {
  listStyle: "none",
  display: "flex",
  cursor: "pointer",
};

const smallTime = {
  display: "block",
};

const item = {
  width: "300px",
  margin: "20px",
};

const Blog = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>S.Kotaro next Blog</title>
      </Head>
      <TitleText>
        <h1>Blog Posts</h1>
      </TitleText>
      <section style={blogPage}>
        <ul style={list}>
          {allPostsData.map((list, id) => (
            <li key={id} style={item}>
              <Article list={list} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Blog;
