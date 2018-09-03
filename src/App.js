import React, { Component } from "react";
import { CommonHeader, CommonFooter } from "./Common";
import { ProjectsPage } from "./Projects";
import { List } from "immutable";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const App = props => {
  return (
    <div className="App">
      <CommonHeader title="welcome to my website!" />
      <div className="mainContent">
        <Router>
          <div id="navigation">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/interests">interests</Link>
              </li>
              <li>
                <Link to="/projects">projects</Link>
              </li>
            </ul>
            <hr />
            <Route path="/projects" component={ProjectsPage} />
            <Route exact path="/" component={HomePage} />
          </div>
        </Router>
      </div>
      <CommonFooter />
    </div>
  );
};

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const HomePage = props => {
  return (
    <div>
      <MyPhilosophy />
      <p>
        if you are interested in any of the following, you may be interested in
        this website.
      </p>
      <InterestsList />
      <p>
        you can also visit any of the links below to look at my software
        projects, my blog or some more of my personal interests.
      </p>
    </div>
  );
};

const InterestsList = props => {
  return (
    <ul>
      <li>modern yoyoing</li>
      <li>go/python/kotlin/(clojure|java)script programming</li>
      <li>cryptography</li>
      <li>software modding</li>
      <li>others?</li>
    </ul>
  );
};

const MyPhilosophy = props => {
  return (
    <div>
      <p>
        there is no simpler or stronger expression of my personal philosophy
        than what the vanilla bard once whispered:
      </p>
      <blockquote>
        "anything less than your best is a felony" - vanilla ice
      </blockquote>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    projects: List()
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
export { HomePage };
