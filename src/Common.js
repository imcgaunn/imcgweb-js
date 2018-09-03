import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomePage } from "./App";

const CommonHeader = props => {
  return (
    <header class="mainHeader">
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
