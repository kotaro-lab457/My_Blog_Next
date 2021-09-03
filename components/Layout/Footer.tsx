import React from "react";

const footer = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#000",
};

const writeFont = {
  color: "#fff",
};

const Footer: React.FC = () => {
  return (
    <footer style={footer}>
      <p style={writeFont}>copylighting kotaro-suzuki</p>
    </footer>
  );
};

export default Footer;