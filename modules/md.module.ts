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

export type params = {
  params: {
    post: string,
  }
}

export type allPostsData = {
  date: string,
  title: string,
  paths: string,
  thumb: string,
  category: string,
  tag: [
    string,
  ]
}

export type postData = {
  title: string,
  date: string,
  thumb: string,
  category: string,
  contentHtml: string,
}