This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Client-Side Navigation とは

- javascript によってページを切り替える仕組み
- URL を切り替えてもページの再読見込みが不要
- ブラウザのページ遷移より高速
- クライアントの状態を保ってページ遷移

## メタデータ編集

- Head コンポーネントを import する。`import Head from next/head`
- Head コンポーネントは`<head>タグ`に変換される。
- ページごとに設定できるので SEO 対策になる。

## Pre-rendering

- Next.js はデフォルトで全ページを `Pre-render` をする。
- `Pre-rendering` = 事前に HTML を生成すること。(サーバー側で HTML を生成しているような形)
- ブラウザの負荷を下げて、表示を高速化 👉 SEO 対策にも繋がる！
- 検索エンジンのクローラーにコンテンツを見せられる（事前に HTML を表示）

### 2 種類のレンダリング方式

- 1.`Static Generation` ... ビルド時にサーバー側で HTML を生成する。EC サイトやブログサイトに向いている。

  - SEO ◎
  - 表示速度が高速
  - 更新頻度が低い方に向いている

- 2.`Server-side-Rendering` ... リクエスト時にサーバー側で HTML を生成する。
  - SEO ○
  - いくつものユーザーが情報を更新できるようなページが有効。SNS とかグループチャットとか。
  - 更新頻度が高い方に向いている

ページの特徴によって使い分けることができる。基本的には、`Static Generation` を使用。

ちなみに `create-react-app` は、`Client-Side-Rendering` を使用している。

### 性的ジェネレーション

外部データなし

- 1.ビルド時に HTML をレンダリング

外部データあり

- 1.ビルド時に DB や外部 API からデータを取得 `getStaticProps()`を使用
  - async/await を使って非同期処理を制御
  - page コンポーネントのみ使用可能
  - 開発環境ではリクエスト毎に実行される
- 2.取得したデータを使って HTML をレンダリング

### サーバーサイドレンダリング

- `getServerSideProps` を使用。
- 外部データを取得する時
- async/await を使って非同期処理を制御できる
- page コンポーネントのみ使用可能

## Dynamic Routes

- ファイル名に`[]`を使うと `Dynamic Routes` になる

外部データからデータを取得する。

```
pages/posts/[id].js
　　　
     posts/
        ┝ https://example.com/posts/pre-rendering.mdみたいな
        └ ssg-ssr
```

- `getStaticPath` で静的ファイルを生成する。
- `paths` と `fallback` を返す
  - `paths` 事前ビルとするパス対象を指定するパラメータ（データを返す）
  - `fallback` 事前ビルドしたパス以外にアクセスした時の動作（指定パス以外なら 404 を返す：false 指定）true なら事前ファイルを表示

[http://localhost:3000/posts/pre-rendering](http://localhost:3000/posts/pre-rendering)
[http://localhost:3000/posts/ssg-ssr](http://localhost:3000/posts/ssg-ssr)

### Catch-all Routes

- `...`括弧内`[]`に３つのドットを追加することで、動的ルートを拡張して全てのパスをキャッチできる。`[...id].js`みたいな

配列として id を渡す `id:["Hero","deku"]`を`params`に入れる.

## API

- 動的 API ルーティング

```javascript
export default function handler(req, res) {
  const { pid } = req.query;
  res.end(`Post: ${pid}`);
}
```

リクエストのクエリフィールドから URL の動的パスを取得できる

## Vercel

- デプロイ環境の構築
- カスタムドメインが使える
- 開発用と本番用の URL がある。git での更新など
  - プレビュー用の URL が発行される

Vercel サイト:[https://vercel.com/new](https://vercel.com/new)

今回の開発サイト：[https://my-blog-next.vercel.app/](https://my-blog-next.vercel.app/)
