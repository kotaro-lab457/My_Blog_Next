import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout, { TitleText } from "../components/layout";

import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

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
    thumb: string;
  }[];
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

const Blog = ({ allPostsData }: Props) => {
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
          {allPostsData.map(({ id, date, title, thumb }) => (
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
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Blog;
