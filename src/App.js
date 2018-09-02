import React, { Component } from "react";
import { CommonHeader, CommonFooter } from "./Common";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router,
         Route, 
         Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommonHeader title="welcome to my website!" />
        <div className="mainContent">
          <Router>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
              </ul>
            <hr/>
              <Route exact path="/" component={HomePage}/>
            </div>
          </Router>
        </div>
        <CommonFooter />
        
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <MyPhilosophy />
        <p>
          if you are interested in any of the following, you may be interested
          in this website.
        </p>
        <InterestsList />
        <p>
          you can also visit any of the links below to look at my software
          projects, my blog or some more of my personal interests.
        </p>
      </div>
    );
  }
}

class InterestsList extends Component {
  render() {
    return (
      <ul>
        <li>modern yoyoing</li>
        <li>go/python/kotlin/(clojure|java)script programming</li>
        <li>cryptography</li>
        <li>software modding</li>
        <li>others?</li>
      </ul>
    );
  }
}

class MyPhilosophy extends Component {
  render() {
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
  }
}

export default App;
