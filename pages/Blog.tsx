import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import Layout, { TitleText } from "@Components/Layout";
import Article from "@Components/Article";

import Thumb from "@Components/Thumb";

import { getSortedPostsData } from "../lib/posts";
import { List } from "@Modules"

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const blogPage = {
  width: "65vw",
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

const blogTitle = {
  padding: "0 3rem",
};

const Blog = ({ allPostsData }: any) => {
  return (
    <Layout>
      <Head>
        <title>S.Kotaro next Blog</title>
      </Head>
      <TitleText>
        <h1>Blog</h1>
      </TitleText>
      <section style={blogPage}>
        <h2 style={blogTitle}>Blog Posts</h2>
        <ul style={list}>
          {allPostsData.map((list:List, id:number) => (
            <li key={id} style={item}>
              <Thumb list={list} />
            </li>
          ))}
        </ul>
      </section>
      <Article />
    </Layout>
  );
};

export default Blog;
