import React from "react";
import { FaTwitter, FaGithub, FaWikipediaW } from "react-icons/fa";
import { IconButton } from "@material-ui/core";

const iconTwitter = {
  color: "#00b0ff",
};

const iconWantedly = {
  color: "#00e5ff",
};

const SnsIcons: React.FC = () => {
  return (
    <>
      <IconButton href="https://github.com/kotaro-lab457">
        <FaGithub />
      </IconButton>
      <IconButton
        href="https://twitter.com/programming0457"
        style={iconTwitter}
      >
        <FaTwitter />
      </IconButton>
      <IconButton
        href="https://www.wantedly.com/id/suzukikkk"
        style={iconWantedly}
      >
        <FaWikipediaW />
      </IconButton>
    </>
  );
};

export default SnsIcons;
