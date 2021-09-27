import React from "react";

const footer = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#000",
};

const Footer: React.FC = () => {
  return (
    <footer style={footer}>
      <p className='text-white' >
        copy-lighting kotaro-suzuki
      </p>
    </footer>
  );
};

export default Footer;