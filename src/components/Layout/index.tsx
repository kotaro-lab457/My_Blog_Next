import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

export const siteTitle = 'S.Kotaro Blog Web';
export const TitleText: React.FC = ({ children }) => {
  return <div className='text-4xl w-full mb-6 text-center py-5 bg-gray-100'>{children}</div>;
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
