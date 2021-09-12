import React from 'react';
import Head from "next/head";
import Layout from "@Components/Layout";
import Thumb from "@Components/Thumb";

import { getAllCategoryIds, getSortedCategoryData } from "@Lib/categories";

import { GetStaticProps } from 'next';
import { allPostsData, List } from "@Modules";

// ダイナミックルータの利用時に静的なファイルとして生成するAPI。
export const getStaticPaths = async () => {
  const paths = getAllCategoryIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }:{ params: { category: string }}) => {
  const categoryData = await getSortedCategoryData(params.category);
  return {
    props: {
      categoryData,
    },
  };
};

const Category = ({ categoryData }: { categoryData: any }) => {
  const data: any = categoryData;
  console.log("カテゴリー",data);
  return (
    <Layout>
      <Head>
        <title>Kotaro Blog Category</title>
      </Head>
      <section>
          <ul>
            {data.map((list: List, id:number) => (
              <li key={id}>
                <Thumb list={list} />
              </li>
            ))}
          </ul>
      </section>
    </Layout>
  );
};

export default Category;