import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "30vh",
    width: "100%",
    border: "2px solid red",
  };
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center ">copyright &copy; MytodosList.com</p>
    </footer>
  );
};
