import React, { Component } from "react";

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
    return (
      <footer id="navigation">
        <li>
          <a href="ll" />
        </li>
        <li>
          <a href="ll" />
        </li>
        <li>
          <a href="ll" />
        </li>
        <li>
          <a href="ll" />
        </li>
        <li>
          <a href="ll" />
        </li>
      </footer>
    );
  }
}

export { CommonHeader, CommonFooter };
