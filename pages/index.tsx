import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import { Top } from "./Top";

import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";
import Link from "next/link";
import Date from "../components/date";
import { tags } from "./tags/[tag]";

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
    thumb: string;
    tag: string;
  }[];
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

const smallTime = {
  display: "block",
};

const item = {
  width: "300px",
  margin: "20px",
};

export default function Home({ allPostsData }: Props) {
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
            {allPostsData.map(({ id, date, title, thumb, tag }) => (
              <li key={id} style={item}>
                <div>
                  <Link href={`/posts/${id}`}>
                    <Image
                      priority
                      src={`/images/${thumb}`}
                      height={230}
                      width={280}
                    />
                  </Link>
                  <small style={smallTime}>
                    <Date dateString={date} />
                  </small>
                  <Link href={`/posts/${id}`}>
                    <p>{title}</p>
                  </Link>
                </div>
                <Link href={`tags/${tag}`}>タグ</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
