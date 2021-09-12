import React from 'react';
import Head from "next/head";
import Layout from "@Components/Layout";
import Thumb from "@Components/Thumb";

import { getAllCategoryIds, getSortedCategoryData } from "@Lib/categories";

import { postsData, List, categoryParams } from "@Modules";

// ダイナミックルータの利用時に静的なファイルとして生成するAPI。
export const getStaticPaths = async () => {
  const paths = getAllCategoryIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: categoryParams) => {
  const categoryData = await getSortedCategoryData(params.category);
  return {
    props: {
      categoryData,
    },
  };
};

const Category = ({ categoryData }: { categoryData: postsData }) => {
  return (
    <Layout>
      <Head>
        <title>Kotaro Blog Category</title>
      </Head>
      <section>
          <ul>
            {categoryData.map((list: List, id:number) => (
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