import React from "react";
import Link from "next/link"
import { FaTwitter, FaGithub, FaWikipediaW } from "react-icons/fa";

const SnsIcons: React.FC = () => {
  return (
    <>
      <Link href="https://github.com/kotaro-lab457">
        <FaGithub />
      </Link>
      <Link
        href="https://twitter.com/programming0457"
      >
        <FaTwitter />
      </Link>
      <Link
        href="https://www.wantedly.com/id/suzukikkk"
      >
        <FaWikipediaW />
      </Link>
    </>
  );
};

export default SnsIcons;
