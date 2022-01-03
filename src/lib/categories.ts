import { getSortedPostsData } from './posts'

export function getSortedCategoryData(id: string) {
  // fs.readFileSync(ファイルのパス、文字こーど、コールバック関数)

  const allCategoryData = getSortedPostsData();
  const categoryDataFilter = allCategoryData.filter((data) => data.category === id);
  return JSON.parse(JSON.stringify(categoryDataFilter));
};

// カテゴリーのparams取得。
export function getAllCategoryIds() {
  const allCategoriesData = getSortedPostsData();
  return allCategoriesData.map((list) => {
    return {
      params: {
        category: list.category,
      },
    };
  });
};

// カテゴリーページ（一覧表示：/categories）
export async function getFilterCategoryData() {
  const allCategoriesData = getSortedPostsData();
  const categoryList = allCategoriesData.map(list => list.category);

  const categories = [...new Set(categoryList)];
  
  return categories;
};
