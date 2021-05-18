import React from "react";
import Link from "next/link";

import { FaTwitter, FaGithub, FaWikipediaW } from "react-icons/fa";

const iconGithub = {
  marginRight: "1rem",
  fontSize: "24px",
  cursor: "pointer",
};

const iconTwitter = {
  color: "#00b0ff",
  marginRight: "1rem",
  fontSize: "24px",
  cursor: "pointer",
};

const iconWantedly = {
  marginRight: "1rem",
  fontSize: "24px",
  cursor: "pointer",
  color: "#00e5ff",
};

const SnsIcons: React.FC = () => {
  return (
    <>
      <span style={iconGithub}>
        <Link href="https://github.com/kotaro-lab457">
          <FaGithub />
        </Link>
      </span>
      <span style={iconTwitter}>
        <Link href="https://twitter.com/programming0457">
          <FaTwitter />
        </Link>
      </span>
      <span style={iconWantedly}>
        <Link href="https://www.wantedly.com/id/suzukikkk">
          <FaWikipediaW />
        </Link>
      </span>
    </>
  );
};

export default SnsIcons;
