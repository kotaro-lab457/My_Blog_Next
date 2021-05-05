import React from "react";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <>
      <header>
        <h1>こたろー Blog</h1>
        <div>
          <Link href="/">Top</Link>
          <Link href="/Page/About">About</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/Work">Work</Link>
        </div>
      </header>
    </>
  );
};
