import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

export const siteTitle = 'S.Kotaro Blog Web';

const titlePage: { [key: string]: string } = {
  width: '100%',
  backgroundColor: '#ebebeb',
  textAlign: 'center',
  padding: '1rem 0',
  marginBottom: '2rem',
};

export const TitleText: React.FC = ({ children }) => {
  return <div style={titlePage}>{children}</div>;
};

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Header />
      <main className='w-full mx-auto pb-6'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
