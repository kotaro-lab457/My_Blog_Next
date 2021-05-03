import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import { Top } from "../components/PageList/Top";
import { Work } from "../components/PageList/Work";
import { About } from "../components/PageList/About";

import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";
import Link from "next/link";
import Date from "../components/date";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

type Props = {
  allPostsData: {
    id: string;
    title: string;
    date: string;
  }[];
};

export default function Home({ allPostsData }: Props) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Top />
      <About />
      <Work />
      <h2>Blog</h2>
      <p>ブログページの作成じゃ！</p>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
