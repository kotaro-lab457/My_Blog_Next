import Head from "next/head";

import  Footer  from "./common/Footer";
import  Header  from "./common/Header";

export const siteTitle = "S.Kotaro Blog Web";

const pages = {
  width: "100%",
  margin: "0 auto",
};

const titlePage: { [key: string]: string } = {
  width: "100%",
  backgroundColor: "#ebebeb",
  textAlign: "center",
  padding: "1rem 0",
  marginBottom: "2rem",
};

export const TitleText: React.FC = ({ children }) => {
  return <div style={titlePage}>{children}</div>;
};

export const Layout: React.FC = ({ children }) => {
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
