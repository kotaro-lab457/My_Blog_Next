import Head from "next/head";

import { Footer } from "./common/Footer";
import { Header } from "./common/Header";

export const siteTitle = "S.Kotaro Blog Web";

const pages = {
  width: "65vw",
  margin: "0 auto",
};

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main style={pages}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
