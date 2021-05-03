import Head from "next/head";
import Link from "next/link";
import { Footer } from "./common/Footer";
import { Header } from "./common/Header";

export const siteTitle = "S.Kotaro Blog Web site";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
