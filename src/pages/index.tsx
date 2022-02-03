import Head from 'next/head';
import { GetStaticProps } from 'next';
import Layout, { siteTitle } from '@Components/Layout';
import Top from './Top';
import { getSortedPostsData } from '@Lib/posts';
import { posts } from '@Modules/index';
import Posts from '@Pages/posts';
import Categories from '@Pages/categories';
import { getFilterCategoryData } from '@Lib/categories';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  const categories = await getFilterCategoryData();
  return {
    props: {
      categories,
      allPostsData,
    },
  };
};

export default function Home({ allPostsData, categories }: posts) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Top />
      <Categories categories={categories} />
      <Posts allPostsData={allPostsData} />
    </Layout>
  );
}
