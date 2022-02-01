export interface List {
  title: string;
  paths: string;
  thumb: string;
  date: string;
  category: string;
}

export interface listProps {
  list: List;
}

export type Props = {
  children: React.ReactNode;
};

export type postParams = {
  params: {
    post: string;
  };
};

export type categoryParams = {
  params: {
    category: string;
  };
};

export type categoryData = {
  categories: string[];
};

export type postsData = {
  allPostsData: {
    date: string;
    title: string;
    paths: string;
    thumb: string;
    category: string;
    tag: [string];
  }[];
};

export type postData = {
  title: string;
  date: string;
  thumb: string;
  category: string;
  contentHtml: string;
};

export interface matterResult {
  title: string;
  thumb: string;
  date: string;
  category: string;
}
