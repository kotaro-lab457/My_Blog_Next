import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Layout, { siteTitle } from '@Components/Layout';
import CategoryList from '@Components/CategoryList';

import { getFilterCategoryData } from '@Lib/categories';

import { categoryData } from '@Modules/index';

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getFilterCategoryData();
  return {
    props: {
      categories,
    },
  };
};

const Categories = ({ categories }: categoryData) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <h2>カテゴリー</h2>
        <section>
          <ul>
            {categories.map((category: string, id: number) => (
              <li key={id}>
                <CategoryList category={category} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Categories;
