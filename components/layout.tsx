import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";

export const siteTitle = "S.Kotaro Blog Web site";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <>
          <Image priority src="/images/profile.png" height={144} width={144} />
        </>
      </header>
      <main>{children}</main>
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
      <footer>こうたろうブログ</footer>
    </div>
  );
}
