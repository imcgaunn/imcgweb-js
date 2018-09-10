import React from "react";

const CommonHeader = props => {
  return (
    <header className="mainHeader">
      <h2>{props.title}</h2>
    </header>
  );
};

const CommonFooter = props => {
  const footerStyles = {
    textAlign: "center"
  };
  return <footer style={footerStyles}>;0</footer>;
};

export { CommonHeader, CommonFooter };
