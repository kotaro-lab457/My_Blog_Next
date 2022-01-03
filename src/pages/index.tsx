import Head from "next/head";
import { GetStaticProps } from "next";

import Layout, { siteTitle } from "@Components/Layout";
import Top from "./Top";

import { getSortedPostsData } from "@Lib/posts";
import { postsData } from "@Modules/index";

import Posts from "@Pages/posts";


export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }: postsData) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Top />
      <Posts allPostsData={allPostsData} />
    </Layout>
  );
}
