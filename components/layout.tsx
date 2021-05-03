import Head from "next/head";
import Link from "next/link";

export const siteTitle = "S.Kotaro Blog Web site";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <p>メニュー</p>
      </header>
      <main>{children}</main>
      <div>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
      <footer>こうたろうブログ</footer>
    </div>
  );
};

export default Layout;
