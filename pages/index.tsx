import Head from "next/head";
import { GetStaticProps } from "next";

import Layout, { siteTitle } from "@Components/Layout";
import Top from "./Top";
import Article from "@Components/Article";

import { getSortedPostsData } from "@Lib/posts";
import { allPostsData } from "@Modules"

import Posts from "@Pages/posts";


export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData
    },
  };
};

export default function Home({ allPostsData }: {allPostsData: allPostsData}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Top />
      <Posts allPostsData={allPostsData} />
      <Article />
    </Layout>
  );
}
