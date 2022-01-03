import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { matterResult } from "@Modules/index";

// postsディレクトリの読み込み
const articleDirectory = path.join(process.cwd(), "articles");

// マークダウンファイルの読み込み（TOPページ）
export function getSortedPostsData(){
  // fs.readFileSync(ファイルのパス、文字こーど、コールバック関数)

  const fileNames = fs.readdirSync(articleDirectory);
    const allPostsData = fileNames.map((fileName) => {
      // IDを取得するには、ファイル名から「.md」を削除してください
      const paths = fileName.replace(/\.md$/, '');
      
      // マークダウンファイルを文字列として読み取る
      const fullPath = path.join(articleDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // matterを使用して投稿メタデータセクションを解析します
      const matterResult = matter(fileContents)
      // Combine the data with the id
      return {
        paths,
        ...(matterResult.data as matterResult),
      };
    });
    // 日付順にする。
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// ブログページのパラメータ
export function getAllPostIds() {
  const fileNames = fs.readdirSync(articleDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        post: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// ブログの参照
export async function getPostData(id: string) {
  const fullPath = path.join(articleDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // 投稿メタデータセクションを解析します
  const matterResult = matter(fileContents);

  // remarkは非同期処理
  // remarkを使用してマークダウンをHTML文字列に変換します
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // データをidおよびcontentHtmlと組み合わせます
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
