import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import Layout, { TitleText } from "@Components/Layout";
import Article from "@Components/Article";

import Thumb from "@Components/Thumb";
import Posts from "./posts/index";

import { getSortedPostsData } from "@Lib/posts";
import { List } from "@Modules"

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
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
      <Posts allPostsData={allPostsData} />
      <Article />
    </Layout>
  );
};

export default Blog;
