import React from "react";

const footer = {
  backgroundColor: "#000",
};

const footerText = {
  color:"#fff",
}

const Footer: React.FC = () => {
  return (
    <>
      <footer style={footer} className="flex justify-center py-2">
        <p style={footerText}>
          copy-lighting kotaro-suzuki
        </p>
      </footer>
    </>
  );
};

export default Footer;