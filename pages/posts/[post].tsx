import Head from "next/head";
import Image from "next/image";
import Layout from "@Components/Layout";
import Date from "@Components/Time";
import { getAllPostIds, getPostData } from "@Lib/posts";
import { postData, postParams } from "@Modules";

// 事前生成するページのパス（URLのパラメータ）を返す。
export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths, // 生成するページのパス
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

const textPages = {
  width: "45vw",
  margin: "2rem auto",
};

// 外部データからデータを取得するDynamic Routesを使用
const Post: React.FC<{postData: postData}> = ({ postData }: { postData: postData } ) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article style={textPages}>
        <Image
          priority
          src={`/images/${postData.thumb}`}
          height={430}
          width={700}
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
