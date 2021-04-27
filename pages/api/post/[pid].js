export default function handler(req, res) {
  const { pid } = req.query;
  res.end(`Post: ${pid}`);
}

// localhost3000/post/hello とやったら、上記の Post: hello が表示される

// リクエストのqueryからURLの動的パスを取得できる
