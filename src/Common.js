import React, { Component } from "react";
import { BrowserRouter as Router,
  Route, 
  Link } from 'react-router-dom';
import { HomePage } from './App';

class CommonHeader extends Component {
  render() {
    return (
      <header class="mainHeader">
        <h2>{this.props.title}</h2>
      </header>
    );
  }
}

class CommonFooter extends Component {
  render() {
    const footerStyles = {
      textAlign: 'center'
    };
    return (
      <footer style={footerStyles}>
        ;0
      </footer>
    );
  }
}

export { CommonHeader, CommonFooter };
