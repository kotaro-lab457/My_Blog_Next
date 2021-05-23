import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";

// サーバーサイドを実行しているAPI
export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

// サーバーサイドを実行しているAPI
export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

// 型宣言
// type props = {
//   postData: {
//     title: string;
//     date: string;
//     contentHtml: string;
//     thumb: string;
//   };
// };

const textPages = {
  width: "45vw",
  margin: "2rem auto",
};

// 外部データからデータを取得するDynamic Routesを使用
const Post = ({ postData }) => {
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
        {/* dangerouslySetInnerHTMLはオブジェクトを渡すことで表示ができる。 */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;