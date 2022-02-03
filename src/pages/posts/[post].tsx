import Head from 'next/head';
import Image from 'next/image';
import { GetStaticPaths } from 'next';
import Layout from '@Components/Layout';
import Date from '@Components/Time';
import { getAllPostIds, getPostData } from '@Lib/posts';
import { postData, postParams } from '@Modules/index';

type Props = {
  postData: postData;
};

// 事前生成するページのパス（URLのパラメータ）を返す。
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

// サーバーサイドを実行しているAPI
export const getStaticProps = async ({ params }: postParams) => {
  const postData = await getPostData(params.post);
  return {
    props: {
      postData,
    },
  };
};

// 外部データからデータを取得するDynamic Routesを使用
const Post: React.FC<Props> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className='mx-auto py-7 w-2/4'>
        <Image
          priority
          alt='BlogImages'
          src={`/images/${postData.thumb}`}
          height={400}
          width={600}
        />
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div>
          <p>カテゴリー：{postData.category}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;
