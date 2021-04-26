import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// _app.jsは特殊なファイルでRouteコンポーネントをラップする
// 全ページで共通して実行させたい処理を実行する。またレイアウトも。
