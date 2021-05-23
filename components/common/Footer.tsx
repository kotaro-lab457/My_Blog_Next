import React from "react";

const footer = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#000",
};

const writeFont = {
  color: "#fff",
};

export const Footer: React.FC = () => {
  return (
    <footer style={footer}>
      <p style={writeFont}>copylighting kotaro-suzuki</p>
    </footer>
  );
};
