import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Layout, { TitleText } from '@Components/Layout';
import Posts from '@Pages/posts';
import { getSortedPostsData } from '@Lib/posts';
import { postsData } from '@Modules/index';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Blog = ({ allPostsData }: postsData) => {
  return (
    <Layout>
      <Head>
        <title>S.Kotaro next Blog</title>
      </Head>
      <TitleText>
        <h1>Blog</h1>
      </TitleText>
      <Posts allPostsData={allPostsData} />
    </Layout>
  );
};

export default Blog;
