import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head lang="ja" />
        <meta
          name="こたろー Blogサイト"
          content="転職活動に向けて、ポートフォリオ兼自分用ブログの設立をして日々のプログラミング学習に励みます！"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
