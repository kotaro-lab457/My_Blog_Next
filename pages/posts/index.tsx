import { GetStaticProps } from "next";

import Thumb from "@Components/Thumb";
import ArticleList from "@Components/ArticleList";

import { getSortedPostsData } from "@Lib/posts";
import { postsData, List } from "@Modules";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    },
  };
};

export default function Posts({ allPostsData }: postsData) {
  return (
    <>
      <h2 className="text-center text-4xl">Blog Posts</h2>
      <section className="
        w-4/5 mt-8 mx-auto
        border-t border-gray-600
      ">
        <ul className="flex justify-between flex-wrap">
          {allPostsData.map((list: List, id: number) => (
            <li key={id} className="w-64 mt-8 cursor-pointer">
              <Thumb list={list} />
            </li>
          ))}
        </ul>
      </section>
      <ArticleList />
    </>
  );
}